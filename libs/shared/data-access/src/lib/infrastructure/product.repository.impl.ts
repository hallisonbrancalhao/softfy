import { Http } from '../ports/http';
import { ProductRepository } from '../ports/product.repository';
import { ProductResponseDto } from '../dtos/produtc.response';

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private http: Http) {}

  #url = `https://dummyjson.com/products`;

  findAll() {
    return this.http.get<ProductResponseDto>(this.#url);
  }
}
