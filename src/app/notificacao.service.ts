import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificacaoService {
  constructor(private snack: MatSnackBar) {}
  notificar(message: string) {
    this.snack.open(message, 'Ok', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
