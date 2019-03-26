import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {
  transform(value: string, args?: any): any {
    if (value.length === 10) {
      const toBeReplaced = value.substring(0, 7);
      return toBeReplaced + 'xxx';
    } else {
      return value;
    }
  }
}
