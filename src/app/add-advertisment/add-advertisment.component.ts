import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-advertisment',
  imports: [FormsModule],
  templateUrl: './add-advertisment.component.html',
  styleUrl: './add-advertisment.component.css'
})
export class AddAdvertismentComponent implements OnInit{
  userEmail:string|undefined|null="";
  newAd:null|any=null;
  ngOnInit(): void {
      this.userEmail=localStorage.getItem("email");
      this.newAd={title:"",
        id:0,
        description:"",
        price:0,
        comments:[],
        uploadedBy:this.userEmail,
        isClosed:false}
  }
constructor(private productService: ProductService,private router: Router){}
  onSubmit() {
    this.productService.addAdd(this.newAd).subscribe(
       (response) => {
        console.log("Add added successfully", response);

        this.newAd = {
          title:"",
          id:0,
          description:"",
          price:0,
          comments:[],
          uploadedBy:"",
          isClosed:false,
        };
        alert("Advertisment Added Successfully");
        this.router.navigate(["dealer-panel"]);
      },
      (err) => {
        console.error("Registration failed", err);
        alert("Registration failed. Please try again.");
      }
    );
  }
}
