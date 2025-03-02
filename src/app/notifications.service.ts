import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { BehaviorSubject } from 'rxjs';

export interface NotificationType {
  title: string;
  message: any;
  read: boolean;
  id:string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  
  private readonly STORAGE_KEY = 'appNotifications';

  private notificationsSubject = new BehaviorSubject<NotificationType[]>(this.loadNotificationsFromStorage());
  public notifications$ = this.notificationsSubject.asObservable();

  private hubConnection!: signalR.HubConnection;

  constructor() {
    this.startConnection();
    this.addNotificationListener();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5214/notificationHub', { withCredentials: true })
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start()
      .then(() => console.log("Connected to SignalR Hub"))
      .catch(err => console.error(`Error while starting SignalR connection: ${err}`));
  }

  private addNotificationListener() {
    this.hubConnection.on('ReceiveNotification', (message: any) => {
      const newNotification: NotificationType = {
        title: message.title,
        message: message.message,
        read: false,
        id:message.id,
      };

      this.addNotification(newNotification);
      alert("New Advertisment is Added: "+newNotification.title)
    });
  }

  addNotification(notification: NotificationType) {
    const currentNotifications = this.notificationsSubject.value;
    const updatedNotifications = [notification, ...currentNotifications];
    
    this.notificationsSubject.next(updatedNotifications);
    this.saveNotificationsToStorage(updatedNotifications);
  }

  markAllAsRead() {
    const updatedNotifications = this.notificationsSubject.value.map(n => ({
      ...n,
      read: true
    }));
    this.notificationsSubject.next(updatedNotifications);
    this.saveNotificationsToStorage(updatedNotifications);
  }

  public loadNotificationsFromStorage(): NotificationType[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private saveNotificationsToStorage(notifications: NotificationType[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notifications));
  }

  clearAllNotifications() {
    this.notificationsSubject.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
