import React, { Component } from 'react'
import { 
    CourseSelectorStyle
} from './CourseSelectorStyle'
import Text from '../Text/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { withRouter, Link } from 'react-router-dom'

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
        if(path != this.props.location.pathname)
            this.props.history.push(path)
    }

    onAddLesson(lesson) {
            LessonModel.addLesson(lesson)
            this.onBack()
    }

    onBack() {
        this.props.history.goBack()        
        this.props.history.goBack()        
    }
  
    
    render() {
        let courses = [
            {
                name: "Kazakh history",
                language: "KAZ",
                code: "KHK"
            },
            {
                name: "Kazakh history",
                language: "RUS",
                code: "KZR"
            },
            {
                name: "Math history",
                language: "RUS",
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