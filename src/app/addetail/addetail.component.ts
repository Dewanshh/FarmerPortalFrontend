import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { DatePipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-addetail',
  imports: [NgFor,FormsModule],
  templateUrl: './addetail.component.html',
  styleUrl: './addetail.component.css',
  standalone:true,
  providers:[DatePipe]
})
export class AddetailComponent implements OnInit {
  itemId:number=0;
  newComment = {
    comment: '',
    createdBy: 'dewansh',
    createdAt: new Date().toISOString(),
  };
  constructor(private route:ActivatedRoute,private productService:ProductService,private datePipe: DatePipe){}
  productDetail:any={};


  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.itemId=+params['id'];
        console.log(this.itemId);
      });
      this.productService.getProductById(this.itemId).subscribe((data)=>{
       this.productDetail=data;
      },(error)=>{
        console.log(error);
      })
  }
  formatDate(dateTime:string){
    const dateObj=new Date(dateTime);
    return this.datePipe.transform(dateObj,'yyyy-MM-dd HH:mm');
  }
 addComment() {
   if(this.newComment.comment.trim()===''){
     alert("Please add Comment");
     return ;
   }else{
    
   this.productService.postCommetToProductById(this.itemId,this.newComment).subscribe((response)=>{},(error)=>{
    alert(error);
   });

    this.newComment.comment='';
   }
  }
}
