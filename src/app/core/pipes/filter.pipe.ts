import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any,   args: any): unknown {
    console.log(value,args);
    if(!args) return value;
    if(args) return value.filter(item => item.f_name.toLowerCase().includes(args));
    
  }


}
