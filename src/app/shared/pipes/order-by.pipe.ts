import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], key: string, isAsc = false): any[] {
    if (!key || key.trim() === '') {
      return array;
    }

    if (isAsc) {
      // ascending
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator(item1[key], item2[key]);
      });
    } else {
      // descending
      return Array.from(array).sort((item1: any, item2: any) => {
        return this.orderByComparator(item2[key], item1[key]);
      });
    }
  }

  private orderByComparator(a: any, b: any): number {
    if (isNaN(parseFloat(a)) || !isFinite(a) || (isNaN(parseFloat(b)) || !isFinite(b))) {
      if (a.toLowerCase() < b.toLowerCase()) { return -1; }
      if (a.toLowerCase() > b.toLowerCase()) { return 1; }
    } else {
      if (parseFloat(a) < parseFloat(b)) { return -1; }
      if (parseFloat(a) > parseFloat(b)) { return 1; }
    }

    return 0;
  }
}
