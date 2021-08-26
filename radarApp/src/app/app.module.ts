import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CarrinhoTotalComponent } from './components/carrinho-total/carrinho-total.component';
import { ProdutoCardComponent } from './components/produto-card/produto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    CarrinhoTotalComponent,
    ProdutoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
