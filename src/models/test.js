import { observable, decorate, action, configure } from 'mobx'

configure({ enforceActions: 'observed' })

class TestModel {
    appliedTests = []
    test = {
        id: null,
        percentage: null,
        date: null
    }

    set(item, value){
        this[item] = value
    }

    addNewTest(test){
        // let { id } = test
        // if(this.appliedTests.findIndex())
        this.appliedTests.push(test)
    }
}

decorate(TestModel, {
    appliedTests: observable,
    set: action
})

export default new TestModel
