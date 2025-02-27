import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  imports: [FormsModule],
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css',
  standalone:true
})
export class RegisterpageComponent {
  constructor(private authService:AuthService,private router: Router){}
  newUser={
    name:"",
    email:"",
    password:"",
    role:"User",
  }
  onSubmit() {
    this.authService.RegisterUser(this.newUser).subscribe(
       (response) => {
        console.log("User registered successfully", response);
        alert("Registered Successfully");
        localStorage.setItem("email", response.user.email); 
        localStorage.setItem("role", response.user.role);
        this.newUser = {
          name: "",
          email: "",
          password: "",
          role: "User",
        };
      },
      (err) => {
        console.error("Registration failed", err);
        alert("Registration failed. Please try again.");
      }
    );
  }
  
}
