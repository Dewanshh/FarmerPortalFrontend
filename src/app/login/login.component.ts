import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authService:AuthService,private router:Router){}
  loginDetails={
    email:'',
    role:'',
    name:'',
    password:''
  }
  onSubmit() {
    this.authService.LoginUser(this.loginDetails).subscribe( (response) => {
        console.log("Login successful", response);
        alert("Logged in Successfully");
  
        localStorage.setItem("email", response.email);
        localStorage.setItem("role", response.role);
  
        this.router.navigate(['']);
      },
      (err) => {
        console.error("Login failed", err);
        alert("Login failed. Please check your credentials.");
      });
  }
  

  
}
