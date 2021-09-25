import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

@Injectable({
  providedIn: 'root',
})
export class CdaService {
  private CONFIG = {
    space: 'n2er5raejnob',
    accessToken: 'SXFVts5oJcIkn8xojXpeCT31YhlZyPTeR2-MTnz7jxs',

    contentTypeIds: {
      blogs: 'importBlog',
    },
  };

  private cdaClient = createClient({
    space: this.CONFIG.space,
    accessToken: this.CONFIG.accessToken,
  });

  constructor() {}
  //list of post
  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: this.CONFIG.contentTypeIds.blogs,
          },
          query
        )
      )
      .then((res) => res.items);
  }
}
