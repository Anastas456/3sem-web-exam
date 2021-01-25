import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsComponent } from './products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortPurchasedPipe } from '../shared/pipes/sort-purchased.pipe';


@NgModule({
  declarations: [ProductListComponent, 
    ProductEditComponent, 
    ProductsComponent,
    SortPurchasedPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
