import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private snakBar: MatSnackBar) { }

  notificar(mensagem:string) {
    this.snakBar.open(mensagem, "Ok", {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "center"
    })
  }
}
