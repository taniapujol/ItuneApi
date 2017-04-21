import { Component, NgModule } from '@angular/core';
import { ITuneService } from './Services/i-tune.service';

declare var Materialize: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ITuneService],
})
export class AppComponent {
  public datos: string;
  public UrlVideo: string;
  public estado: boolean;
  constructor(private _service: ITuneService) {
    this.estado = false;
  }
  openFiltro() {
    this.estado = true;
  }
  onModal(UrlVideo) {
    this.UrlVideo = UrlVideo;
    $('.modal').modal();
    $('#modal-video').modal('open');
  } // fin funcion onModal
  getDatos(search, media) {
    return this._service.listDatos(search, media)
        .subscribe(resul => {
          if (resul.resultCount <= 0){
            console.log('no hay datos');
            Materialize.toast('No hay datos para esta busqueda', 4000);
          }else{
            this.datos = resul.results;
            console.log(this.datos);
          }

        },
        error => {
          console.log('error');
        });
  } // fin funcion getDatos
} // fin
