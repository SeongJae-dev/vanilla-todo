import View from "./views/View.js";

const tag = '[Controller]'

export default class Controller {
    constructor(store, {todoFormView, todoListView}) {
        console.log(tag)
        this.store = store;
        this.todoForomView = todoFormView;
        this.todoListView = todoListView

        this.subscribeViewEvents();
        this.render()

    }

    subscribeViewEvents() {
        this.todoForomView.on('@submit', (event) => this.save(event))
        this.todoListView.on('@dblclick', (event) => this.delete(event))
    }

    save(event) {
        const {value} = event.detail
        this.store.save(value)
        this.render()
    }

    delete(event) {
        const {key} = event.detail;
        this.store.delete(key)
        this.render()
    }

    render() {
        this.todoListView.show(this.store.getDataList())
    }
}

