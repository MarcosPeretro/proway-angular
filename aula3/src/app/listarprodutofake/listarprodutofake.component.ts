import { Component } from '@angular/core';
import { FakeprodutoService } from '../fakeproduto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listarprodutofake',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listarprodutofake.component.html',
  styleUrl: './listarprodutofake.component.css'
})

export class ListarprodutofakeComponent {
  produtos: any[] = []
  constructor(private fakeProduto: FakeprodutoService){}
  
  carregarProdutos(){
    this.fakeProduto.getProdutos().subscribe(dados => this.produtos = dados)
  }
}
