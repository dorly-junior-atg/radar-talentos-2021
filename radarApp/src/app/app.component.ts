import { Component, OnInit } from '@angular/core'
import { ProdutoResponse } from './models/produto.response';
import { ProdutosService } from './services/produtos.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
})
export class AppComponent implements OnInit {
    title = 'radarApp';
    produtos: Array<ProdutoResponse>;

    constructor(private produtosService: ProdutosService) {}

    ngOnInit(): void {
        this.recuperarProdutos();
    }

    recuperarProdutos(): void {
        this.produtosService.recuperar().subscribe((response) => {
            this.produtos = response;
        });
    }

}
