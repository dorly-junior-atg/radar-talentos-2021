export class ProdutoResponse {
    public id: number;
    public imagem: string;
    public nome: string;
    public preco: string;
    public isFavorito: boolean;
    public isSuperOferta: boolean;
    public quantidade: number;

    constructor(params?: Partial<ProdutoResponse>) { 
        this.id = params?.id!;
        this.imagem = params?.imagem!;
        this.nome = params?.nome!;
        this.preco = params?.preco!;
        this.isFavorito = params?.isFavorito!;
        this.isSuperOferta = params?.isSuperOferta!;
        this.quantidade = 0;
    }
}