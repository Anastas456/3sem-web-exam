import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPurchased'
})
export class SortPurchasedPipe implements PipeTransform {

  transform(products): any[] {
    if(products==undefined){
      return products;
    }

    products.sort((a, b) => {
      if (a.status != b.status) {
        return b.status - a.status;
      } 
      else {
        return a.name.localeCompare(b.name);
      }
    }) 

    return products;

  }

}
