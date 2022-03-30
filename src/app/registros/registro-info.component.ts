import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Registro } from "./registro";
import { RegistroService } from "./registros.service";

@Component({
  templateUrl: './registro-info.component.html'
})
export class RegistroInfoComponent implements OnInit {

  registro: Registro;

  constructor(private activatedRoute: ActivatedRoute, private registroService: RegistroService) {

  }

  ngOnInit(): void {
    this.registro = this.registroService.recuperarPorMes(+this.activatedRoute.snapshot.paramMap.get('mes'));

  }
}
