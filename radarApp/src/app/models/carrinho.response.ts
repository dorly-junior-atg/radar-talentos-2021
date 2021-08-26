import { ProdutoResponse } from "./produto.response";

export class CarrinhoResponse {
    public produtos: Array<ProdutoResponse>;
    public total: number;

    constructor() { 
        this.produtos = [];
        this.total = 0;
    }
}