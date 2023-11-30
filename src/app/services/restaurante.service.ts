import { Injectable } from '@angular/core';
import { IRestaurante } from '../model/Irestaurante';

@Injectable({
  providedIn: 'root',
})
export class RestauranteService {
  restaurantes: IRestaurante[] = [
    {
      nome: 'McDonalds',
      tipo: 'Fast-food',
      quantidade: 200,
    },
  ];

  constructor() {}

  adicionarRestaurante(nome: string, tipo: string, quantidade: number) {
    const restauranteNovo: IRestaurante = {
      nome: nome,
      tipo: tipo,
      quantidade: quantidade,
    };
    this.restaurantes.push(restauranteNovo);
  }

  excluirRestaurante(index: number) {
    this.restaurantes.splice(index, 1);
  }

  obterRestaurantes(index: number): IRestaurante {
    return this.restaurantes[index];
  }

  editarRestaurante(
    nomeEdicao: string,
    tipoEdicao: string,
    quantidadeEdicao: number,
    index: number
  ) {
    const restaurante: IRestaurante = {
      nome: nomeEdicao,
      tipo: tipoEdicao,
      quantidade: quantidadeEdicao,
    };

    this.restaurantes[index] = restaurante;
  }
}
