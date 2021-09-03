import View from "./View.js";
import {on, qs} from "../utils/common.js";

const tag = '[TodoFormView]'

export default class TodoFormView extends View {
    constructor() {
        console.log(tag, ' constructor')
        super(qs('#todo-form-view'));

        this.insertElement = qs('[type=text]', this.element)

        this.bindEvents()
    }

    bindEvents() {
        on(this.insertElement, 'keyup', () => this.handleKeyup())
        this.on('submit', (event) => this.handleSubmit(event));
    }

    handleSubmit(event) {
        event.preventDefault();
        const {value} = this.insertElement
        this.emit('@submit', {value})
    }

    handleKeyup() {
        const {value} = this.insertElement;

        console.log("handleKeyup ", value)
    }
}