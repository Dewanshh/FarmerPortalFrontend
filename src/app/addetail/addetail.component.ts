import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-addetail',
  imports: [NgFor,FormsModule,NgIf],
  templateUrl: './addetail.component.html',
  styleUrl: './addetail.component.css',
  standalone:true,
  providers:[DatePipe]
})
export class AddetailComponent implements OnInit {
  itemId:number=0;
  userId: string | null = "";
  userRole: string | null = "";
  newComment = {
    comment: '',
    createdBy: 'dewansh',
    createdAt: new Date().toISOString(),
  };
  constructor(private route:ActivatedRoute,private productService:ProductService,private datePipe: DatePipe,private router:Router){}
  productDetail:any={};


  ngOnInit(): void {
      this.route.params.subscribe(params=>{
        this.itemId=+params['id'];
        console.log(this.itemId);
      });
      this.userId = localStorage.getItem("email");
      this.userRole = localStorage.getItem("role");
  
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
  goToLogin() {
    this.router.navigate(["/login"]);
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
