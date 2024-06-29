import { Component } from '@angular/core';
import { TProduto } from '../interfaces';
import { ActivatedRoute } from '@angular/router';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  produto: TProduto = { id: 0, descricao: ""}
  idProduto: string = ""
  constructor(
    private route: ActivatedRoute,
    private CRUDService: CRUDService,
  ){
    this.produto = this.CRUDService.getProdutoPeloId(this.route.snapshot.params["id"])
  }
}
