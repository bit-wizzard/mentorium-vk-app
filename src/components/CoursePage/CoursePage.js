import React, { Component } from 'react'
import { CoursePageStyle } from './CoursePageStyle'
import { withRouter } from 'react-router-dom'
import Title from '../Title/Title'
import LessonModel from '../../models/lesson'
import Notification from '../Notification/Notification'
import Course from '../Course/Course'
import Bottom from '../Bottom/Bottom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


import { TestData } from '../../data/TestData'
import TestModel from '../../models/test'
import { observer } from 'mobx-react'


class CoursePage extends Component { 
    
    constructor() {
        super()
        this.state = {
            notiCounter: 2,
            tests: TestModel.appliedTests,
            width: null,
            firstTime: true,
        }
    }

    componentWillMount() {
        
        if(this.state.tests.length > 0)
            this.setState({notiCounter: 3})
    }

    componentDidUpdate() {
        if(this.state.notiCounter == 2 && this.state.tests.length > 0)
                this.setState({notiCounter: 3})

        if(this.state.notiCounter == 3 && this.state.tests.length == 0) 
                this.setState({notiCounter: 2})

        if(this.state.firstTime) {
            this.setState({firstTime: false})
            this.setState({width: window.innerWidth})
        }
    }
    componentDidMount() {
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

        // let test = this.state.tests.map((data, i) => (
            // <Course test progress={data.progress} date={data.date} key={i} test_id={data.id}z />
        // ))

        let { name, language } = LessonModel.lesson
        
        return (
            <>
                <CoursePageStyle
                width={this.state.width}
                margin={this.state.notiCounter}>
                    <div className='main-header'>
                        <Title title={`${name} ${language}`}/>
                        <div className='notification'>
                    <Notification type={this.state.notiCounter} />
                    </div>
                    </div>
                        <div className='test-list'>
                            <TransitionGroup>

                            {
                                this.state.tests.map((data, i) => (
                                    <CSSTransition
                                    timeout={200}
                                    classNames='items'
                                    key={i}
                                >
                                        <Course test progress={data.progress} date={data.date} key={i} test_id={data.id}z />
                                    </CSSTransition>
                                ))
                            }
                            </TransitionGroup>
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