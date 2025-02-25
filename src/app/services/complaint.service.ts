import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  addComplaintUrl="http://localhost:5214/api/complaints"
  constructor(private http:HttpClient) { }


  addComplaint(jsonBody:any){
    return this.http.post<any>(this.addComplaintUrl,jsonBody);
  }

  getComplaint(){
    return this.http.get<any>(this.addComplaintUrl);
  }

  getComplaintById(id:number){
    return this.http.get<any>(this.addComplaintUrl+`/${id}`);
  }

  addComment(id:number,jsonBody:any){
    return this.http.post<any>(this.addComplaintUrl+`/comment/${id}`,jsonBody);
  }
}
