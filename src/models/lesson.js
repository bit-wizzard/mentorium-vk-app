import { observable, configure, action, decorate } from 'mobx'

configure({ enforceActions: 'observed' })

class LessonModel {

    lessons = [{
        id: 1,
        value: null
    }]

    set(item, value) {
        this[item] = value
    }

    addLesson(lesson){
        this.lessons.push(lesson)
    }
}

decorate(LessonModel, {
    lessons: observable,

    set: action
})

export default new LessonModel()