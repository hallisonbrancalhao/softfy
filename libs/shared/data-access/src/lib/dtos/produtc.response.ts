import { Product } from '../entities/product';

export interface ProductResponseDto {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
