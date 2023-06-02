import { collectionDataAccess } from '@esoft7s/collection/data-access';
import { collectionDomain } from '@esoft7s/collection/domain';

export function collectionApi(): string {
  console.log(collectionDataAccess());
  console.log(collectionDomain());
  return 'collection-api';
}
