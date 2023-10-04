import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProdutosComponent, ProdutosDetalhesComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ],
})
export class ProdutosModule {}
