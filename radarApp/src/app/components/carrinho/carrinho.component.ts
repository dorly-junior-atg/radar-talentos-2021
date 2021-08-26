import { Component, OnInit } from '@angular/core'
import { CarrinhoResponse } from 'src/app/models/carrinho.response'
import { ProdutoResponse } from 'src/app/models/produto.response';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
    selector: 'app-carrinho',
    templateUrl:'./carrinho.component.html',
    styles: [],
})
export class CarrinhoComponent implements OnInit {
    carrinho: CarrinhoResponse = new CarrinhoResponse();

    constructor(private carrinhoService: CarrinhoService) {}

    ngOnInit(): void {
        this.adicionarProdutos();
    }

    adicionarProdutos(): void {
        this.carrinhoService.eventoStream$.subscribe((produto) => {
            this.carrinho.produtos.push(produto);
            this.somarTotal(produto);
        });
    }

    somarTotal(produto: ProdutoResponse): void {
        this.carrinho.total += produto.preco * produto.quantidade;
    }
}
