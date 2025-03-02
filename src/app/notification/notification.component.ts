import { Component, OnInit } from '@angular/core';
import { NotificationsService, NotificationType } from '../notifications.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  imports:[NgFor,NgIf,CommonModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications$: Observable<NotificationType[]> = new BehaviorSubject<NotificationType[]>([]);

  constructor(private notificationService: NotificationsService,private router:Router) {}
 
  ngOnInit(): void {
      this.notifications$ = this.notificationService.notifications$;
  }
  goToRoute(path:string){
    this.router.navigate(['ads/'+path]);
  }
}
