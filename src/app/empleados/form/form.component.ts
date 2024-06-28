import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
   //Creando un nuevo objeto.
   nuevo: IEmpleado= {
    id:0,
    nombre:"",
    correo:"",
    fechaNacimiento:"",
    sexo:"",
    telefono:""
  }
  //@Output()
  //onNuevoCliente: EventEmitter<ICliente> = new EventEmitter();

  constructor (private _empleadosService : EmpleadosService){}


  agregar(){
    if(this.nuevo.nombre.trim().length === 0)
      return;

    //Agregamos al nuevo cliente por medio del servicio
    let fecha = new Date(this.nuevo.fechaNacimiento);
    this.nuevo.fechaNacimiento = fecha.toLocaleDateString();
    this._empleadosService.agregarEmpleado(this.nuevo);
    this.nuevo = {
      id:0,
      nombre:"",
      correo:"",
      fechaNacimiento:"",
      sexo:"",
      telefono:""
    }
  }
}
