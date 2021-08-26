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
    
    constructor(private carrinhoService: CarrinhoService) {}

    ngOnInit(): void {}

    adicionarAoCarrinho(produto: ProdutoResponse): void {
        this.carrinhoService.adicionarAoCarrinho(produto);
    }
}
