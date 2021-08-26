import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProdutoResponse } from '../models/produto.response';

@Injectable({
    providedIn: 'root',
})
export class CarrinhoService {
    public eventoStream$: Subject<ProdutoResponse> = new Subject();
	
	constructor() {}

	adicionarAoCarrinho(produto: ProdutoResponse): void {
		this.eventoStream$.next(produto);
	}
}
