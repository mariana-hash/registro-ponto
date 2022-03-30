import { Component, OnInit } from "@angular/core";
import { Registro } from "./registro";
import { RegistroService } from "./registros.service";

@Component({
  templateUrl: './registro-list.component.html'

})
export class RegistroListComponent implements OnInit {

  _registros: Registro[] = [];

  filteredRegistros: Registro[] = [];

  _filterByMes: string;

  _filterByTipo: string;

  _meses: [
    {
      id: 1;
      nome: "janeiro"
    }, {
      id: 2;
      nome: "fevereiro"
    }, {
      id: 3;
      nome: "março"
    }, {
      id: 4;
      nome: "abril"
    }, {
      id: 5;
      nome: "maio"
    }, {
      id: 6;
      nome: "junho"
    }, {
      id: 7;
      nome: "julho"
    }, {
      id: 8;
      nome: "agosto"
    }, {
      id: 9;
      nome: "setembro"
    }, {
      id: 10;
      nome: "outubro"
    }, {
      id: 11;
      nome: "novembro"
    }, {
      id: 12;
      nome: "dezembro"
    },

  ]

  constructor(private registroService: RegistroService) {

  }

  ngOnInit(): void {

    this._registros = this.registroService.recuperarTodosRegistros();

    this.filteredRegistros = this._registros;

  }
  set mesFiltro(value: string) {
    this._filterByMes = value;
    this.filteredRegistros = this._registros.filter((registro: Registro) => registro.mes.toString().indexOf(this._filterByMes.toString() + 1) > -1)
  }

  set filterTipo(value: string) {
    this._filterByTipo = value;
    this.filteredRegistros = this.filteredRegistros.filter((registro: Registro) => registro.tipo.indexOf(this._filterByTipo) > -1)
  }

  get mesFiltro() {
    return this._filterByMes;
  }

  get meses() {
    return this._meses;
  }

}
