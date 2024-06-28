import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  contador = 0;

  constructor(){
    //Recuperar la lista de localstorage
    this._empleados = JSON.parse(localStorage.getItem('empleados')!) || [];
  }

  private _empleados : IEmpleado[]=[];

  //creamos un metodo get para acceder a la lista
  get empleados(): IEmpleado[]{
    return this._empleados;
  }

  agregarEmpleado(empleado : IEmpleado){
    this.contador++;
    empleado.id = this.contador;
    this._empleados.push(empleado);

    // guardamos la lista de cliente en local storage
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(id : number){

    //items = items.filter(i => i.name !== name);
    this._empleados = this._empleados.filter(i => i.id !== id)

    // guardamos la lista de cliente en local storage
    localStorage.setItem('empleados', JSON.stringify(this._empleados));
  }
}
