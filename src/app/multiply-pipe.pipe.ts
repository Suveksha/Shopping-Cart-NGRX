import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplyPipe'
})
export class MultiplyPipePipe implements PipeTransform {

  transform(value:any, quant:any): unknown {
    return value*quant
  }

}
