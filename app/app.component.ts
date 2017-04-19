import { Component } from '@angular/core';
import { ITuneService } from './Services/i-tune.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ITuneService]
})
export class AppComponent {
  public datos: string;
  constructor(private _service: ITuneService) {}

  getDatos(search){
    return this._service.listDatos(search)
        .subscribe(resul => {
          if (resul.resultCount <= 0){
            console.log('no hay datos');
          }else{
            this.datos = resul.results;
            console.log(this.datos);
          }

        },
        error => {
          console.log('error');
        });
  }
}
