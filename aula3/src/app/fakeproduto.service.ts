import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FakeprodutoService {

  constructor(private http: HttpClient ) { }


  getProdutos(): Observable<any>{
    return this.http.get("https://fakestoreapi.com/products")
  }
}
