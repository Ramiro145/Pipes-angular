import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {

  transform(canfly:boolean): 'vuela' | 'no vuela' {
    if(canfly)return 'vuela';
    return 'no vuela'
  }

}
