import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Fade,
  Stack,
  Typography
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Product } from '../../types/Product';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
  visibleCount?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showIndicators?: boolean;
}

const ProductCarousel: React.FC<Props> = ({
  products,
  visibleCount = 3,
  autoPlay = false,
  autoPlayInterval = 5000,
  showIndicators = true,
}) => {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxScroll = Math.max(0, products.length - visibleCount);

  const scrollTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const child = container.children[0] as HTMLElement;
    const scrollAmount = child.offsetWidth * index;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    setScrollIndex(index);
  };

  const handlePrev = () => scrollTo(Math.max(scrollIndex - 1, 0));
  const handleNext = () => scrollTo(Math.min(scrollIndex + 1, maxScroll));

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      scrollTo((scrollIndex + 1) % (maxScroll + 1));
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [scrollIndex, autoPlay, autoPlayInterval]);

  // Efecto para manejar el arrastre del mouse y el desplazamiento táctil del crrusel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      container.style.cursor = 'grab';
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      container.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      container.scrollLeft = scrollLeft.current - walk;
    };

    const handleTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      container.scrollLeft = scrollLeft.current - walk;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove);

    container.style.cursor = 'grab';

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);

      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  if (products.length === 0) {
    return (
      <Box
        position="relative"
        width="100%"
        py={2}
        sx={{
          overflow: 'hidden',
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
          No hay productos disponibles.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      width="100%"
      py={2}
      sx={{
        overflow: 'hidden',
        backgroundColor: "#f4f6f8",
        borderRadius: 2,
        marginTop: 5,
        marginBottom: 5,
        px: 2,
      }}
    >
      <Fade in={scrollIndex > 0}>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 16,
            transform: 'translateY(-50%)',
            bgcolor: 'background.paper',
            boxShadow: 2,
            zIndex: 2,
            '&:hover': {
              bgcolor: 'grey.100',
            }
          }}
          aria-label="Anterior"
        >
          <ChevronLeft />
        </IconButton>
      </Fade>

      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          overflowX: 'hidden',
          scrollSnapType: 'x mandatory',
          gap: 2,
          px: 2,
        }}
      >
        {products.map((product) => (
          <Box
            key={product.codigo}
            sx={{
              flex: `0 0 calc(100% / ${isSmDown ? 1 : visibleCount})`,
              scrollSnapAlign: 'start',
              transition: 'transform 0.3s ease',
            }}
          >
            <ProductCard product={product} />
          </Box>
        ))}
      </Box>

      <Fade in={scrollIndex < maxScroll}>
        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 16,
            transform: 'translateY(-50%)',
            bgcolor: 'background.paper',
            boxShadow: 2,
            zIndex: 2,
            '&:hover': {
              bgcolor: 'grey.100',
            }
          }}
          aria-label="Siguiente"
        >
          <ChevronRight />
        </IconButton>
      </Fade>

      {showIndicators && (
        <Stack direction="row" justifyContent="center" mt={2} spacing={1}>
          {Array.from({ length: maxScroll + 1 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: index === scrollIndex ? 'primary.main' : 'grey.400',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ProductCarousel;
