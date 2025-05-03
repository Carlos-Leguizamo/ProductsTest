import { Product } from './Product';
export interface ProductCarouselProps {
    products: Product[];
    visibleCount?: number;           
    autoPlay?: boolean;
    autoPlayInterval?: number;       
  }
  