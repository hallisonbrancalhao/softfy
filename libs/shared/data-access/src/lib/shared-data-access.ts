import { ProductFacade } from './application/product.facade';
import { FetchHttpImpl } from './infrastructure/fetch-http.impl';
import { ProductRepositoryImpl } from './infrastructure/product.repository.impl';
import { Http } from './ports/http';
import { ProductRepository } from './ports/product.repository';

export function sharedDataAccess() {
  return {
    name: 'shared-data-access',
    infrastructure: [
      {
        for: Http,
        use: FetchHttpImpl,
      },
      {
        for: ProductRepository,
        use: ProductRepositoryImpl,
        add: [Http],
      },
    ],
    applications: [
      {
        for: ProductFacade,
        add: [ProductRepository],
      },
    ],
  };
}
