import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoResponse } from '../models/produto.response';

@Injectable({
    providedIn: 'root',
})
export class ProdutosService {
    constructor(private http: HttpClient) {}

	recuperar(): Observable<Array<ProdutoResponse>> {
		return this.http.get<Array<ProdutoResponse>>('./assets/dados.json');
	}
}
