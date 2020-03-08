import { observable, configure, action, decorate } from 'mobx'

configure({ enforceActions: 'observed' })

class LessonModel {

    lessons = []
    lesson = {
        name: null,
        code: null,
        language: null
    }
    set(item, value) {
        this[item] = value
    }

    addLesson(lesson){
        let { code } = lesson
        if(this.lessons.findIndex(o => o.code == code) == -1) {
            this.lessons.push(lesson)
        }
    }

    getLessonData(code) {
        this.lesson = this.lessons.find(o => o.code == code)
    }

    deleteFromLessons(code) {
        let index = this.lessons.findIndex(o => o.code == code)
        this.lessons.splice(index, 1)
    }
}

decorate(LessonModel, {
    lessons: observable,

    set: action
})

export default new LessonModel()