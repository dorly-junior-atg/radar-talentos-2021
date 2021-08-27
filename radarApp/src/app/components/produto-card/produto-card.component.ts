import { Component, Input, OnInit } from '@angular/core'
import { ProdutoResponse } from 'src/app/models/produto.response'
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
    selector: 'app-produto-card',
    templateUrl: './produto-card.component.html',
    styles: [],
})
export class ProdutoCardComponent implements OnInit {
    @Input() produto: ProdutoResponse;
    quantidade: number = 1;
    
    constructor(private carrinhoService: CarrinhoService) {}

    ngOnInit(): void {}

    adicionarAoCarrinho(produto: ProdutoResponse): void {
        produto.quantidade += this.quantidade;
        this.carrinhoService.adicionarAoCarrinho(produto);
    }

    favoritar(produto: ProdutoResponse): void {
        produto.isFavorito = !produto.isFavorito;
    }
}
