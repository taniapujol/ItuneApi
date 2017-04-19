import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ITuneService {

  constructor(private _jsonp: Jsonp) { }

  listDatos(search: string){
    let url= 'https://itunes.apple.com/search?term=' + search;
    let param = new URLSearchParams();
    param.set('callback', 'JSONP_CALLBACK');

    return this._jsonp.get(url, {params: param}).map(response => response.json());
  }

}
