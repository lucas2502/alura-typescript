class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantiade = quantidade;
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantiade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantiade * this._valor;
    }
}
