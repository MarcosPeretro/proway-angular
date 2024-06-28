import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-listafrutas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listafrutas.component.html',
  styleUrl: './listafrutas.component.css'
})
export class ListafrutasComponent {
  frutas:string[] = []

  constructor(private produtoService:ProdutoService){
    this.carregarFrutas()
  }
  carregarFrutas(){
    this.frutas = this.produtoService.listaFrutas()
  }
}
