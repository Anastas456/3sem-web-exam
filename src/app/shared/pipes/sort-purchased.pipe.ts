import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPurchased'
})
export class SortPurchasedPipe implements PipeTransform {

  transform(products, status:boolean): any[] {
    return null;

  }

}
