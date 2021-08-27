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
            const produtoJaIncluido = this.carrinho.produtos.filter( item => item.id == produto.id)[0];

            if(!produtoJaIncluido) {
                this.carrinho.produtos.push(produto);
            } 
            
            this.recalcularTotal();
        });
    }

    removerProduto(produto: ProdutoResponse): void {
        this.carrinho.produtos = this.carrinho.produtos.filter((item) => item.id !== produto.id);
        this.recalcularTotal();
    }

    recalcularTotal(): void {
        this.carrinho.total = 0;
        this.carrinho.produtos.forEach(produto => {
            this.carrinho.total += produto.quantidade * produto.preco;
        });
    }
}
