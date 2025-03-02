import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-panel',
  imports: [],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
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
