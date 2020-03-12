import React, { Component } from 'react'
import { CoursePageStyle } from './CoursePageStyle'
import { withRouter } from 'react-router-dom'
import Title from '../Title/Title'
import LessonModel from '../../models/lesson'
import Notification from '../Notification/Notification'
import Course from '../Course/Course'
import Bottom from '../Bottom/Bottom'

class CoursePage extends Component { 
    
    constructor() {
        super()
        this.state = {
            notificationCounter: 2
        }
    }

    
    tests = [
        {
            progress: 10,
            date: '20.02.20',
            id: 1
        }
    ]
    
    componentDidMount() {
        if(this.tests.length > 0)
            this.setState({notificationCounter: 3})
    }


    render() {

        let test = this.tests.map((data, i) => (
            <Course test progress={data.progress} date={data.date} key={i} test_id={data.id}z />
        ))

        let { name, language } = LessonModel.lesson
        
        return (
            <>
                <CoursePageStyle>  
                    {name ?
                        <Title title={`${name} (${language})`}/>
                        :
                        <> hello </>
                    }
                    <Notification type={this.state.notificationCounter} />
                        <div className='test-list'>
                            {test}
                        </div>
                </CoursePageStyle>
                <div onClick={() => console.log('hello')}> 
                <Bottom type='new-test'/>
                </div>
            </>
        )
    }
}

export default withRouter(CoursePage)