import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ITuneService {

  constructor(private _jsonp: Jsonp) { }

  listDatos(search: string, media: string, entity?: string) {
    const url = 'https://itunes.apple.com/search?';
    const param = new URLSearchParams();
    param.set('term', search);
    param.set('media', media);
    param.set('entity', entity);
    param.set('callback', 'JSONP_CALLBACK');

    return this._jsonp.get(url, {params: param}).map(response => response.json());
  }

}
