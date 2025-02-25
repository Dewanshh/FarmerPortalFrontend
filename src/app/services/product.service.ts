import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProductsUrl="http://localhost:5214/api/Ads";
  getProductByIdUrl="http://localhost:5214/api/ads";
  addCommentToProductUrl="http://localhost:5214/api/ads/";
  constructor(private http:HttpClient) { }
  getProducts(): Observable<any[]> {
    return this.http.get<any>(this.getProductsUrl); 
  }
  getProductById(id:number):Observable<any[]>{
    return this.http.get<any>(this.getProductByIdUrl+`/${id}`);
  }
  postCommetToProductById(id:number,jsonBody:any):Observable<any>{
    console.log(this.addCommentToProductUrl+`${id}/comment`);
    return this.http.post<any>(this.addCommentToProductUrl+`${id}/comment`,jsonBody);
  }
}