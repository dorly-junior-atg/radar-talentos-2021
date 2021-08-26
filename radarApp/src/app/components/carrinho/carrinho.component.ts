import { Component, OnInit } from '@angular/core'
import { CarrinhoResponse } from 'src/app/models/carrinho.response'

@Component({
    selector: 'app-carrinho',
    templateUrl:'./carrinho.component.html',
    styles: [],
})
export class CarrinhoComponent implements OnInit {
    carrinho: CarrinhoResponse = new CarrinhoResponse();

    constructor() {}

    ngOnInit(): void {}
}
