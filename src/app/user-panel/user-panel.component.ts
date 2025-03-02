import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  imports: [],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css',
  standalone:true
})
export class UserPanelComponent {
  constructor(private router:Router){}
  logout(){
    localStorage.setItem('email',"");
    localStorage.setItem('role',"");
    this.goToRoute('');

  }
  goToRoute(path:string){

    this.router.navigate([path],{skipLocationChange:false});
  }
}
