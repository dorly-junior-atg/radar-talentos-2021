import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CarrinhoComponent } from './components/carrinho/carrinho.component'
import { CarrinhoTotalComponent } from './components/carrinho-total/carrinho-total.component'
import { ProdutoCardComponent } from './components/produto-card/produto-card.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt)

@NgModule({
    declarations: [
        AppComponent,
        CarrinhoComponent,
        CarrinhoTotalComponent,
        ProdutoCardComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
    providers: [{
        provide: LOCALE_ID, 
        useValue: "pt-BR"
      }],
    bootstrap: [AppComponent],
})
export class AppModule {}
