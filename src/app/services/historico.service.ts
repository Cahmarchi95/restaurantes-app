import { Injectable } from '@angular/core';
import { HistoricoRestaurante } from '../model/Ihistorico';

@Injectable({
  providedIn: 'root',
})
export class HistoricoService {
  private historico: HistoricoRestaurante[] = [];

  adicionarHistorico(nome: string): void {
    const historicoItem: HistoricoRestaurante = {
      nome,
      dataEdicao: new Date(),
    };
    this.historico.push(historicoItem);
  }

  obterHistorico(): HistoricoRestaurante[] {
    return this.historico;
  }

  limparHistorico(): void {
    this.historico = [];
  }
}
