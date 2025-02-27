import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgIf],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  userId: string = "";
  userRole: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    const x = localStorage.getItem("email") || "";
    const role = localStorage.getItem("role") || "";

    this.userId = x.trim();
    this.userRole = role.trim();
  }

  goToPage(path: string) {
    this.router.navigate([path]);
  }
}
