import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

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
          this.ofertas = ofertas 
        })
      .catch(( param: any ) => { 
        console.log(param) 
      })
   
  }

}
