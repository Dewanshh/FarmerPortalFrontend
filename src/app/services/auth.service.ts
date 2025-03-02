import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  registerUrl = "http://localhost:5214/api/Auth/register";
  loginUrl = "http://localhost:5214/api/Auth/login";
  getUserUrl = "http://localhost:5214/api/Auth/getuser";



  RegisterUser(user: any): Observable<any> {
    return this.http.post<{email:string,role:string}>(this.registerUrl, user);
  }

  LoginUser(user: any): Observable<any> {
    return this.http.post<{ email: string; role: string }>(this.loginUrl, user);
  }
  GetUsers():Observable<any>{
    return this.http.get(this.getUserUrl);
  }
}
