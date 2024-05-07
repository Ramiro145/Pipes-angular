import { Component } from '@angular/core';
import { Observable, interval, take, tap } from 'rxjs';


type Gender = 'male' | 'female';




@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = 'Ramiro';
  public gender: Gender = 'male';



  public invitationMap = {
    //evaluo en base a gender en el html y solo tiene 2 tipos
    //por lo que la clave debe ser igual a algunos en gender
    'male':'invitarlo',
    'female':'invitarla'
  }

  changeClient():void{
    this.name = 'Dorian';
    this.gender = 'female'
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando','Eduardo','Melissa','Natalia'];

  public clientsMap = {
    '=0' : 'no tenemos ningun cliente esperando.',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos 2 esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift();
  }

  //keyValue pipe
  public person = {
    name:'Ramiro',
    age:22,
    address:'Monterrey, Nuevo Leon'
  }


  //Async Pipe
  //cada dos segundos se emite un valor con este observable
  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(x=> {
      console.log('tap', x)
    })
  );


  public promiseValue:Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('tenemos data en la promesa')
      console.log('data en promesa')

    }, 3500);

  })
}
