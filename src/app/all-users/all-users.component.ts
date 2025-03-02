import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-users',
  imports: [NgFor],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css',
  standalone:true
})
export class AllUsersComponent implements OnInit{
  allUsers:any=[];
  constructor(private authService:AuthService){}
  ngOnInit(): void {
    this.authService.GetUsers().subscribe((response)=>{
      this.allUsers=response;
      console.log("All Users Fetched");
    },(err)=>{console.log(err)});
  }

}
