import React, { Component } from 'react'
import { CourseSelectorStyle, CourseSelectorInner, CourseSelectorInnerActivated } from './CourseSelectorStyle'
import Text from '../Text/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";

// import { LessonModel } from '../../models/lesson'

class CourseSelector extends Component {

    constructor(props) {
        super()
        this.state = {
            active: false,
        }
    }

    nextPath(path) {
        
    }

    onAddLesson(lesson) {
        // LessonModel.addLesson(lesson)
        console.log(lesson)
    }

    componentDidMount() {
        if(this.props.activated)
            this.setState({ active: true })
        else {
            // setTimeout(() => {
            //     this.setState({
            //         active: true
            //     })
            // }, 0)
            this.setState({ active: true })
        }
    }    
    
    render() {

        let courses = [
            {
                name: "Kazakh history",
                language: "KAZ"
            },
            {
                name: "Kazakh history",
                language: "RUS"
            },
            {
                name: "Math history",
                language: "RUS"
            }
        ]

        let course = courses.map((data, i) => (
            <div className='selectorInnerActivated'
            onClick={this.onAddLesson(data)}
            key={i}>
                <Text size='default'>{data.name}</Text>
                <Text size='default'>({data.language})</Text>
            </div>
        ))

    
        return (
            <>
                <CourseSelectorStyle 
                main={this.props.main}
                active={this.state.active}>
                    {this.props.activated ?
                    <>
                    <CourseSelectorInnerActivated>
                        {course}
                        <div className='selectorInnerActivated'>
                        <Text type='secondary' size='default'>Название предмета</Text>
                        <FontAwesomeIcon icon={faChevronUp} color='#898989'/>
                        </div>
                    </CourseSelectorInnerActivated>
                    </>
                    :
                    <>
                    <CourseSelectorInner 
                    active={this.state.active}
                    onClick={() => this.nextPath('/course-selector')}>
                        <Text type='secondary' size='default'>Название предмета</Text>
                        <FontAwesomeIcon icon={faChevronUp} color='#898989'/>
                    </CourseSelectorInner>
                    </>
                    }
                </CourseSelectorStyle>
            </>
        )
    }
}

export default withRouter(CourseSelector)