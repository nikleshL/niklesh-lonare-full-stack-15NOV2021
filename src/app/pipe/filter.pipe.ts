import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, value: string, prop: string): any {
    if (!items || !value) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item[prop].toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
