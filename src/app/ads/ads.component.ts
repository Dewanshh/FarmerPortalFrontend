import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-ads',
  imports:[CommonModule],
  standalone: true,
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})
export class AdsComponent implements OnInit {
  constructor(private router: Router,private productService:ProductService) {}
  productList:any[]=[];
  ngOnInit(){
    this.productService.getProducts().subscribe((response)=>{
      this.productList=response;
    },(error)=>{
      console.log(error);
      alert(error);
    })
  }
  goToPage(adId:number){
    this.router.navigate([`ads/${adId}`])
  }
}
