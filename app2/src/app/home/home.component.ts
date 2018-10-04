import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // injeção de serviço
  providers: [ OfertasService ]
})

export class HomeComponent implements OnInit {  

  public ofertas: Oferta[]
 
  constructor(public ofertasService: OfertasService) {  }

  ngOnInit() {
   // forma feita chumbada sem injeção do serviço
   // let ofertas: OfertasService = new OfertasService()
   // console.log(ofertas.getOfertas())
   //this.ofertas = this.ofertasService.getOfertas()

   this.ofertasService.getOfertas2()
      .then(
        ( ofertas: Oferta[]) => { 
          console.log('A funcao resolve() foi resolvida depois de 3 segundos')
          this.ofertas = ofertas 
        })
      .catch(( param: any ) => { 
        console.log(param) 
      })
   
  } 

}
