import { Component, OnInit } from '@angular/core';

//// se importa la config basica de los formularios //////
import { FormControl, FormGroup } from '@angular/forms'; 

// importar el servico de busqueda //
import { LibreriaService } from 'src/app/services/libreria.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {


// aca se declara el form indicando que campos tiene ////
  
busquedaForm = new FormGroup({
  termino: new FormControl(),

});

  constructor(
    private libreriaService: LibreriaService

  ) { }


onSubmit(){
  console.log("vas bien");
  // llamar al servicio y enviarle a la funo findBooks el termino buscado. //



// conseguir el dato que se tipeo
const { termino } = this.busquedaForm.value;

this.libreriaService.findbooks(termino).subscribe(libros =>{
  
  console.log("resultados", libros)

});


  ngOnInit(): void {}

  }
}