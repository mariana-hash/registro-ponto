import { Injectable } from "@angular/core";
import { Registro } from "./registro";

@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  recuperarTodosRegistros(): Registro[] {
    return REGISTROS;
  }

  recuperarPorMes(mes: string): Registro {
    return REGISTROS.find((registroIterator: Registro) => registroIterator.mes == (mes))
  }

  registrarPonto(tipo: string): void {
    // if (registro.id) {
    //   const index = REGISTROS.findIndex((registroIterator: Registro) => registroIterator.id === registro.id);
    //   REGISTROS[index] = registro;
    // }
    let date = new Date
    let reg: Registro = {
      id: '',
      dia: date.getDate().toString(),
      mes: (date.getMonth() + 1).toString(),
      ano: date.getFullYear().toString(),
      hora: date.getHours().toString(),
      minuto: date.getMinutes().toString(),
      tipo: tipo

    };
    REGISTROS.push(reg);
  }


}

var REGISTROS: Registro[] = [];
