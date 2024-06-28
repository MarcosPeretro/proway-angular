import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  frutas: string[] = ["maça", "banana", "uva"]
  constructor() { }

  listaFrutas(){
    return this.frutas
  }

  addFruta(fruta:string){
    this.frutas.push(fruta)
  }
  getMensagem(){
    return "Ola mundo do service"
  }
}
