import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {



  //la segunda propiedad sera un tipo de valor de nuestra
  //interface 'Hero' o 'null'
  transform(heroes:Hero[], sortBy?: keyof Hero | ''): Hero[] {

    console.log({heroes,sortBy})

    switch(sortBy){
      case 'name':
        //revisar documentacion sort mdn
        return heroes.sort((a,b) => (a.name > b.name) ? 1 : -1);
      case 'canFly':
        //revisar documentacion sort mdn
        return heroes.sort((a,b) => (a.canFly > b.canFly) ? 1 : -1);
      case 'color':
        //revisar documentacion sort mdn
        return heroes.sort((a,b) => (a.color > b.color) ? 1 : -1);
      default:
      return heroes;
    }

  }

}
