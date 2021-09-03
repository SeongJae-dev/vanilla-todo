import {delegate, qs} from "../utils/common.js";
import View from "./View.js";

export default class TodoListView extends View {
    constructor() {
        super(qs('#todo-list-view'));

        this.template = new Template();
        this.bindEvents();
    }

    bindEvents() {
        delegate(this.element, 'dblclick', 'li', (event) => this.handleDbClick(event))
    }

    handleDbClick(event) {

        const key = event.target.dataset.key;
        this.emit('@dblclick', {key})
    }

    show(data = []) {
        this.element.innerHTML = data.length > 0 ? this.template.getList(data) : this.template.getEmpty()
    }
}

class Template {
    getEmpty() {
        return `
            <div>데이터가 없습니다</div>
        `
    }

    getList(data = []) {
        return `
            ${data.map(this.getItem).join("")}
        `;
    }

    getItem({id, content}) {
        return `
        <li data-key="${id}">
            <span>${id}</span>
            ${content}
        </li>
       `
    }

}
