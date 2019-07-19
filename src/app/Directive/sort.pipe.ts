import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortData implements PipeTransform {
    transform(value: any, sortColumn: string, order: string): string {
        console.log('sortColumn' + sortColumn);
        return value.sort(this.getSortColumn(sortColumn, order));
    }
    /*
     * function to sort the product data according to key(column)
    */
    getSortColumn(val, order) {
        return function (firstRow, secondRow) {
            if (order === 'asc') {
                if (firstRow[val] > secondRow[val]) {
                    return 1;
                } else if (firstRow[val] < secondRow[val]) {
                    return -1;
                }
            } else {
                if (firstRow[val] < secondRow[val]) {
                    return 1;
                } else if (firstRow[val] > secondRow[val]) {
                    return -1;
                }
            }
            return 0;
        };
    }
}
