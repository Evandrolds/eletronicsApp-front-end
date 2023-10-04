import { ProdutosRoutingModule } from './produtos/produtos-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutosModule } from './produtos/produtos.module';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradoComponent,
    PesquisaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProdutosModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgTemplateOutlet,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
