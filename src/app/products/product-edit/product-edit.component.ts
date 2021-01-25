import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/shared/models/product.model';
import { ProductServiceService } from 'src/app/shared/services/product-service.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id:number;
  product:ProductModel;
  productForm:FormGroup;

  constructor(private activetedRoute: ActivatedRoute,
    private productService:ProductServiceService,
    private router:Router
    ) { 
    this.activetedRoute.params.subscribe(params =>{
        if (params.id !==null && params.id!==undefined){
        this.id=+params.id;
      }
      else{
        this.id=null;
      }
    })
  }

  ngOnInit(): void {
    this.productForm= new FormGroup({
      name:new FormControl(null, [Validators.required]),
      amount:new FormControl(null, [Validators.required]),
      status:new FormControl(false, [Validators.required])
    });
    this.getData();
  }

  async getData(){
      if(this.id !==null && this.id !==undefined){
      try{
        let product=this.productService.getOneById(this.id);
        this.product= await product;
      }
      catch(err){
        console.error(err);
      }
      this.productForm.patchValue({
        name: this.product.name,
        amount: this.product.amount,
        status: this.product.status
      })
    }
  }

  async onDelete(){
    try{
      await this.productService.deleteOneById(this.id);
    }
    catch(err){
      console.error(err);
    }
    this.router.navigate(['/products']);
  }

  async onSave(){
      if (this.id !==null && this.id !==undefined){
      try{
        await this.productService.putOneById(this.id, this.productForm.value);
      }
      catch(err){
        console.error(err);
      }
    }
    else{
      try{
        let res=await this.productService.postOne(this.productForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      }
      catch(err){
        console.error(err);
      }
    }
  }



}
