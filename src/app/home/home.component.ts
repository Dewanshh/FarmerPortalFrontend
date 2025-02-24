import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goToPage(itemId:number) {
    this.router.navigate([`ads/${itemId}`]);
  }

}
