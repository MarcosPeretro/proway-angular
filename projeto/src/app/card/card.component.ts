import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { sharedModule } from '../SharedModule';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, sharedModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  nome:string =  "Marcos"
  frutas:string[] = ["banana", "Maça", "melancia", "pitaya", "tangerina", "laranja", "marcacuja"]
  idade:number = 13232
  Produtos:any

  constructor(private http:HttpClient){}
  
  ngOnInit(){
    this.http.get("https://fakestoreapi.com/products").subscribe(dados =>{
    this.Produtos = dados

    })
    console.log("oiwsadseSDCOKI")
  }
  comprar(){
    alert("Produto Comprado com sucesso")
  }
}
