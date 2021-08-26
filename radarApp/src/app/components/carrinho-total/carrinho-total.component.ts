import { Component, Input, OnInit } from '@angular/core'
import { CarrinhoResponse } from 'src/app/models/carrinho.response'

@Component({
    selector: 'app-carrinho-total',
    templateUrl:'./carrinho-total.component.html',
    styles: [],
})
export class CarrinhoTotalComponent implements OnInit {
    @Input() carrinho: CarrinhoResponse;
    
    constructor() {}

    ngOnInit(): void {}

    exibirTotalItens(): number {
        return this.carrinho.produtos.map(p => p.quantidade).reduce((soma, valor) => soma + valor); 
    }
}
