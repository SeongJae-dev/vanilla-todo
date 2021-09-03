const tag = '[Store]'
export default class Store {
    constructor(data) {
        console.log(tag)
        this.data = data
    }


    save(value) {
        this.data.list.push({id: this.nextId() + 1, content: value})
    }

    delete(key) {
        console.log('delete ', key)
        this.data.list = this.data.list.filter(value => value.id !== Number(key))
    }

    getDataList() {
        return this.data.list
    }

    nextId() {
        return this.data.list.map(value => value.id).reduce((previousValue, currentValue) => Math.max(previousValue, currentValue), 0);
    }

}
