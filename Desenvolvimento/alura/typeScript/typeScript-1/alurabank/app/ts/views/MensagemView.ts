class MensagemView extends View<string> {

    template(model: string): string{

        return `
            <p className="alet alert-info">${model}</p>
        `;
    }
}