import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if(!args)
    return value;
    if(!value)
    return null
    return value.filter((f:any)=>f.country.toLowerCase().includes(args))
  }

}
