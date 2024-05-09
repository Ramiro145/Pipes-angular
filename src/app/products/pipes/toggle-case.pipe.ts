import { Pipe, PipeTransform } from "@angular/core";


//'ramiro | toggleCase = 'RAMIRO'
//RAMIRO |togglecase = 'ramiro'
@Pipe({
  name:'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{

  //el nombre es especifico que se llame asi 'transforms'
  //cuando se tienen mas de 3 argumento en un metodo o funcion
  //es mejor recibir un objeto
  transform(value: string, toUpper:boolean = false):string {

    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
    }


}
