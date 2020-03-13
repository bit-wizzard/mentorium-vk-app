import React, { Component } from 'react'
import { 
    CourseSelectorStyle
} from './CourseSelectorStyle'
import Text from '../Text/Text'
import { withRouter } from 'react-router-dom'

import LessonModel from '../../models/lesson'
import { observer } from 'mobx-react'

class CourseSelector extends Component {

    constructor(props) {
        super()
        
        this.state = {
            active: true,
        }
    }    

    nextPath(path) {
        if(path !== this.props.location.pathname)
            this.props.history.push(path)
    }

    onAddLesson(lesson) {
        LessonModel.addLesson(lesson)
    }
 
    
    render() {
        let courses = [
            {
                name: "Казахстан тарихы",
                language: "Каз",
                code: "KHK"
            },
            {
                name: "История Казахстана",
                language: "Рус",
                code: "KZR"
            },
            {
                name: "Математикалк сауаттылык",
                language: "Каз",
                code: "MHR"
            }
        ]

        let course = courses.map((data, i) => (
            <div className='selector-item'
            onClick={() => this.onAddLesson(data)}
            key={i}>
                <Text size='default'>{data.name}</Text>
                <Text size='default'>({data.language})</Text>
            </div>
        ))
        
    
        return (
            <>  
                <CourseSelectorStyle>
                        {course}
                </CourseSelectorStyle>
            </>
        )
    }
}

export default withRouter(observer(CourseSelector))