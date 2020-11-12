import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-busqueda',
  templateUrl: './pagina-busqueda.component.html',
  styleUrls: ['./pagina-busqueda.component.css']
})
export class PaginaBusquedaComponent implements OnInit {

  constructor() { }

  mostrarFoto:boolean = false;

  ngOnInit() {
  }

  enviarCodigo(){
    
    if (this.mostrarFoto == false) {
      setTimeout(()=> {
        this.mostrarFoto = true;
      }, 1000);
    } else {
      this.mostrarFoto = false;
    }
    
  }

}
