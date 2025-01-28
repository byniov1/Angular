import { Pipe, PipeTransform } from '@angular/core';

type Direction = 'asc' | 'desc';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(value: string[] | number[], direction: Direction = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b) => {
      if (direction === 'asc') {
        return a > b ? 1 : -1;
      } else {
        return a > b ? -1 : 1;
      }
    });

    return sorted;
  }
}
