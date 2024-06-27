import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  contatos = [
    {
      nome: "maria",
      email: "maria@gmail.com",
      fone: "(47) 9090-9090"
    }
  ]

  recebeDados(dados: any) {
    console.log(dados)
    this.contatos.push(dados) 

  }
}
