import { Observable } from 'rxjs';
import { ProductResponseDto } from '../dtos/produtc.response';

export abstract class ProductRepository {
  abstract findAll(): Observable<ProductResponseDto>;
}
