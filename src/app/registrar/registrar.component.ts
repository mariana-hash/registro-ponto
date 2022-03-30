import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Registro } from "../registros/registro";
import { RegistroService } from "../registros/registros.service";

@Component({
  templateUrl: './registrar.component.html'
})

export class RegistrarComponent implements OnInit {
  registro: Registro;
  constructor(private activatedRoute: ActivatedRoute, private registroService: RegistroService) {

  }
  ngOnInit(): void {
    this.registro = this.registroService.recuperarPorMes(this.activatedRoute.snapshot.paramMap.get('mes'));

  }
  registrarPonto(tipo: string): void {
    this.registroService.registrarPonto(tipo);

  }
}
