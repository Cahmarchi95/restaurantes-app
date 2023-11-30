import { Component } from '@angular/core';
import { RestauranteService } from 'src/app/services/restaurante.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  nome!: string;
  tipo!: string;
  quantidade!: number;

  constructor(private restauranteService: RestauranteService) {}

  adicionarRestaurante() {
    this.restauranteService.adicionarRestaurante(
      this.nome,
      this.tipo,
      this.quantidade
    );

    this.limparDados();
  }

  limparDados() {
    this.nome = '';
    this.tipo = '';
    this.quantidade = 0;
  }
}
