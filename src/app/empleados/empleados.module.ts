import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { ListadoComponent } from './listado/listado.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosService } from './empleados.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FormComponent,
    ListadoComponent,
    PaginaInicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PaginaInicioComponent,
    ListadoComponent
  ],
  providers:[
    EmpleadosService
  ]
})
export class EmpleadosModule { }
