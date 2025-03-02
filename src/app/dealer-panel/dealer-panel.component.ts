import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealer-panel',
  imports: [],
  templateUrl: './dealer-panel.component.html',
  styleUrl: './dealer-panel.component.css'
})
export class DealerPanelComponent {

  constructor(private router:Router){}

  goToRoute(path:string){
    this.router.navigate([path]);
  }
  logout(){
    localStorage.setItem("email","");
    localStorage.setItem("role","");

  }
}
