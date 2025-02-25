import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router,private productService: ProductService) {}
  advertisments:any[]=[];
  ngOnInit(){
    this.productService.getProducts().subscribe((data)=>{
      this.advertisments=data;
    },(error)=>{
      console.log(error);
    })
  }

  goToPage(itemId:number) {
    this.router.navigate([`ads/${itemId}`]);
  }

}
