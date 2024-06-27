import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AtividadeComponent } from './atividade/atividade.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, CadastroComponent, AtividadeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-aula2';

  contato = {
    nome: "Maria",
    email:"maria@gmail.com",
    fone: "4702-8922"
  }

  ola(){
    alert("ola")
  }
  frutas = ["maça", "laranja", "pera"]
}
