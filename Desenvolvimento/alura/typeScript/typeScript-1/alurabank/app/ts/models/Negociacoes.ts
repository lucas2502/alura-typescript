class Negociacao {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);

    }

    paraArray(): Negociacao[] {
        return this._negociacoes;
        
    }
}