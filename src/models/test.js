import { observable, decorate, action, configure } from 'mobx'

configure({ enforceActions: 'observed' })

class TestModel {
    appliedTests = []
    test = {
        id: null,
        progress: null,
        date: null,
        code: null,
        questionsData: [],
        correctAnswers: [],
        wrongAnswers: []
    }

    submittedTest = {}


    set(item, value){
        this[item] = value
    }

    addNewTest(test){
        let id = this.appliedTests.length + 1 
        test.id = id
        
        let a = new Date().toISOString()
        test.date = a.slice(8, 10) + '/' + a.slice(5, 7) + '/' + a.slice(0, 4)
        
        test.progress = 0

        
        this.appliedTests.push(test)
    }

    getTests(){
        return this.appliedTests
    }

    setTest(id){
        this.test = this.appliedTests.find(o => o.id == id) 
    }

    submitTest(test){
        this.submittedTest = test
        let a = new Date().toISOString()
        test.date = a.slice(8, 10) + '/' + a.slice(5, 7) + '/' + a.slice(0, 4)
        
        let id = this.appliedTests.findIndex(o => o.id == test.id)

        this.appliedTests[id] = test
    }
}

decorate(TestModel, {
    appliedTests: observable,

    addNewTest: action,
    setTest: action,
    submitTest: action,
    set: action
})

export default new TestModel
