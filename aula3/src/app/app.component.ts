import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProdutoService } from './produto.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ListafrutasComponent } from './listafrutas/listafrutas.component';
import { ListarprodutofakeComponent } from './listarprodutofake/listarprodutofake.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  NgFor, FormsModule, ListafrutasComponent, ListarprodutofakeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensagem: string = "ola mundossssss"
  retorno:  string = ""
  
  constructor(private produtoService:ProdutoService){

  }
  ola(){
    this.retorno = this.produtoService.getMensagem()
    alert(this.retorno)
  }

   adicionarFruta (fruta:string){
    console.log(fruta)
    this.produtoService.addFruta(JSON.parse(JSON.stringify(fruta)).nome)
   }

  
}
