import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './atividade.component.html',
  styleUrl: './atividade.component.css'
})
export class AtividadeComponent {
  
  Armazenamento = [
    {
      id:3,
      descricao:"doritos",
      preco: "vintao"
      
    }
  ]

  dados(parametro:any){
    console.log(parametro)
    this.Armazenamento.push(parametro)
  }
}
