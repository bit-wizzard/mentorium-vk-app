import { observable, configure, action, decorate } from 'mobx'

configure({ enforceActions: 'observed' })

class LessonModel {

    lessons = []

    set(item, value) {
        this[item] = value
    }

    addLesson(lesson){
        let { code } = lesson
        if(this.lessons.findIndex(o => o.code == code) == -1) {
            this.lessons.push(lesson)
        }
    }
}

decorate(LessonModel, {
    lessons: observable,

    set: action
})

export default new LessonModel()