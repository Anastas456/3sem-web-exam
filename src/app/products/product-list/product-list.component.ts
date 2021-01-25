import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/shared/models/product.model';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:ProductModel[];

  constructor(private productService: ProductServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    try{
      let products = this.productService.getAll();
      this. products= (await products === null) || (await products === undefined) ? [] : await products;
    }
    catch (err){
      console.error(err);
    }
  }

  // onChangeStatus(status){
  //   let newStatus= !status;
  //   console.log('status: '+newStatus);
  // }

  onAddProfile(){
    this.router.navigate([this.router.url, 'profile']);
  }

  onLinkProfile(id:number){
    this.router.navigate([this.router.url, 'profile', id]);
  }

}
