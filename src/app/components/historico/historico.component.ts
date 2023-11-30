import { Component, OnInit } from '@angular/core';
import { HistoricoRestaurante } from 'src/app/model/Ihistorico';
import { HistoricoService } from 'src/app/services/historico.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
})
export class HistoricoComponent implements OnInit {
  historico: HistoricoRestaurante[] = [];

  constructor(private historicoService: HistoricoService) {}

  ngOnInit() {
    this.historico = this.historicoService.obterHistorico();
  }

  limparHistorico(): void {
    this.historicoService.limparHistorico();
    this.historico = [];
  }
}
