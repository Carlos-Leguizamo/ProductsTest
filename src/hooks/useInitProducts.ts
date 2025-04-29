import { useEffect } from 'react';
import { useProductStore } from '../context/productStore';

export const useInitProducts = () => {
  const loadFromStorage = useProductStore((state) => state.loadFromStorage);
  useEffect(() => {
    loadFromStorage();
  }, []);
};
