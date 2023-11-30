import { Component } from '@angular/core';
import { IRestaurante } from 'src/app/model/Irestaurante';
import { HistoricoService } from 'src/app/services/historico.service';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  restaurantes: IRestaurante[] = [];
  nome!: string;
  tipo!: string;
  quantidade!: number;
  indexEdicao!: number;

  constructor(
    private restauranteService: RestauranteService,
    private historicoService: HistoricoService
  ) {
    this.restaurantes = restauranteService.restaurantes;
  }

  excluirRestaurante(index: number) {
    this.restauranteService.excluirRestaurante(index);
  }

  edicao(index: number) {
    const restauranteEdicao = this.restauranteService.obterRestaurantes(index);
    this.nome = restauranteEdicao.nome;
    this.tipo = restauranteEdicao.tipo;
    this.quantidade = restauranteEdicao.quantidade;
    this.indexEdicao = index;
  }

  editarRestaurante() {
    const restauranteAtual: IRestaurante =
      this.restauranteService.obterRestaurantes(this.indexEdicao);

    this.restauranteService.editarRestaurante(
      this.nome,
      this.tipo,
      this.quantidade,
      this.indexEdicao
    );
    this.historicoService.adicionarHistorico(this.nome);
  }
}
