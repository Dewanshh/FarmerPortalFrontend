import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerdealer',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './registerdealer.component.html',
  styleUrl: './registerdealer.component.css'
})
export class RegisterdealerComponent {
constructor(private authService:AuthService,private router: Router){}
  newUser={
    name:"",
    email:"",
    password:"",
    role:"Dealer",
  }
  onSubmit() {
    this.authService.RegisterUser(this.newUser).subscribe(
       (response) => {
        console.log("User registered successfully", response);

        this.newUser = {
          name: "",
          email: "",
          password: "",
          role: "Dealer",
        };
        alert("Registered Successfully");
        this.router.navigate(['admin'])
      },
      (err) => {
        console.error("Registration failed", err);
        alert("Registration failed. Please try again.");
      }
    );
  }
}
