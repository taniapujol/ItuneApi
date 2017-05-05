import { Component, NgModule, OnInit} from '@angular/core';
import { ITuneService } from './_service/i-tune.service';
import { media, entity } from './_model/modelo';
import {FormControl, FormGroup} from '@angular/forms';

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
  public medio: media;
  public entity: entity;
  constructor(private _service: ITuneService) {}
  ngOnInit() {
    $('select').material_select();
    this.estado = false;
    this.medio =
      [
        {nombre: 'Pelicula', value: 'movie'},
        {nombre: 'Musica', value: 'music'},
        {nombre: 'VideoClip', value: 'musicVideo'},
        {nombre: 'TV Series', value: 'tvShow'},
        {nombre: 'Libros', value: 'ebook'},
      ];
    this.entity =
      [
        { clase: 'Pelicula', values: 'movieArtist', nombre: 'Actor' },
        { clase: 'Pelicula', values: 'movie', nombre: 'Nombre' },
        { clase: 'Musica', values: 'musicArtist', nombre: 'Artista' },
        { clase: 'Musica', values: 'album', nombre: 'Albunes' },
        { clase: 'Musica', values: 'song', nombre: 'Canciones' },
        { clase: 'Musica', values: 'musicVideo', nombre: 'VideoClips' },
        { clase: 'VideoClip', values: 'musicArtist', nombre: 'Actor' },
        { clase: 'VideoClip', values: 'musicVideo', nombre: 'Nombre' },
        { clase: 'TV Series', values: 'tvEpisode', nombre: 'Episodio' },
        { clase: 'TV Series', values: 'tvSeason', nombre: 'temporadas' },
      ];
    
  } // fin de onInit
  openFiltro() {
   if (this.estado === false) {this.estado = true};
   if (this.estado === true) {this.estado = false};
  }
  onModal(UrlVideo) {
    this.UrlVideo = UrlVideo;
    $('.modal').modal();
    $('#modal-video').modal('open');
  } // fin funcion onModal
  getDatos(search, media, filtro) {
    console.log('variable search: ' + search);
    console.log('variable media: ' + media);
    console.log('variable entity: ' + filtro);
    // return this._service.listDatos(search, media, filtro)
    //     .subscribe(resul => {
    //       if (resul.resultCount <= 0){
    //         console.log('no hay datos');
    //         Materialize.toast('No hay datos para esta busqueda', 4000);
    //       }else{
    //         this.datos = resul.results;
    //         console.log(this.datos);
    //       }

    //     },
    //     error => {
    //       console.log('error');
    //     });
  } // fin funcion getDatos
} // fin
