import React, { Component } from 'react'
import { CoursePageStyle } from './CoursePageStyle'
import { withRouter } from 'react-router-dom'
import Title from '../Title/Title'
import LessonModel from '../../models/lesson'
import Notification from '../Notification/Notification'
import Course from '../Course/Course'
import Bottom from '../Bottom/Bottom'

import { TestData } from '../../data/TestData'
import TestModel from '../../models/test'
import { observer } from 'mobx-react'


class CoursePage extends Component { 
    
    constructor() {
        super()
        this.state = {
            notificationCounter: 2,
            tests: TestModel.appliedTests
        }
    }

    
    componentDidMount() {
        if(this.state.tests.length > 0)
            this.setState({notificationCounter: 3})
        let tests = TestModel.getTests()
        this.setState({ tests })
    }

    
    onAddNewTest() {
        let test = { code: 0  }
        test.code = LessonModel.lesson.code
        test.questionsData = TestData
        TestModel.addNewTest(test)
    }

    render() {

        let test = this.state.tests.map((data, i) => (
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
                <div onClick={() => this.onAddNewTest()}> 
                <Bottom type='new-test'/>
                </div>
            </>
        )
    }
}

export default withRouter(observer(CoursePage))