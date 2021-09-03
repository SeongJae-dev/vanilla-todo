import Controller from "./Controller.js";
import TodoFormView from "./views/TodoFormView.js";
import Store from "./model/Store.js";
import {data} from "./model/data.js";
import TodoListView from "./views/TodoListView.js";


const tag = '[App]'

function App() {
    console.log(tag)

    const store = new Store(data);
    const views = {
        todoFormView: new TodoFormView(),
        todoListView: new TodoListView(),

    }

    new Controller(store, views)
}

document.addEventListener('DOMContentLoaded', App)

