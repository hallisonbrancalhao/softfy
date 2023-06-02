import { from } from 'rxjs';
import { Http } from '../ports/http';

export class FetchHttpImpl extends Http {
  request<R = unknown, D = void>(method: string, url: string, data?: D) {
    const body = data ? new FormData() : null;

    if (body) {
      const entries = Object.entries(data as object);

      entries.forEach(([key, value]) => {
        body.append(key, value);
      });
    }

    return from<Promise<R>>(
      fetch(url, { method, body }).then((response) => response.json())
    );
  }
}
