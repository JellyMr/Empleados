import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  constructor (private _empleadosService : EmpleadosService){}


  get empleados() : IEmpleado[] {
    return this._empleadosService.empleados
  }

  eliminar(id:number){
    console.log("eliminar "+id)
    this._empleadosService.eliminarEmpleado(id);
  }

}
