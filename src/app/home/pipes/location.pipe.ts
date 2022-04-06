import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'location'
})
export class LocationPipe implements PipeTransform {

  transform(value: number): string {
    const str = `${value}`;
    if (str.length > 10) return `${str.slice(0, 10)}...`;
    return str;
  }

}
