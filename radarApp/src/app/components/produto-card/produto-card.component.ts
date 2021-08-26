import { Component, Input, OnInit } from '@angular/core'
import { ProdutoResponse } from 'src/app/models/produto.response'

@Component({
    selector: 'app-produto-card',
    templateUrl: './produto-card.component.html',
    styles: [],
})
export class ProdutoCardComponent implements OnInit {
    @Input() produto: ProdutoResponse;
    
    constructor() {}

    ngOnInit(): void {}
}
