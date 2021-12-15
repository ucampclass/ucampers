class SquareLetter extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({ mode: 'open'});
        const div= document.createElement('div');
        div.innerHTML = '<h1>Hola mundo soy un componente!!!</h1>';

        this.shadowRoot.append(div);
    }
}
customElements.define('square-letter', SquareLetter);