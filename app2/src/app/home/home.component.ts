import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // injeção de serviço
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
   // forma feita chumbada sem injeção do serviço
   // let ofertas: OfertasService = new OfertasService()
   // console.log(ofertas.getOfertas())
   console.log(this.ofertasService.getOfertas)
  }

}
