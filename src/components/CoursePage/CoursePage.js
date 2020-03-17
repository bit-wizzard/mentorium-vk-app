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
            tests: [],
            width: null,
            firstTime: true,
            opened: false,
        }
    }

    componentWillMount() {

        if (this.state.tests.length > 0)
            this.setState({ notiCounter: 3 })
    }

    componentDidUpdate() {
        if (this.state.notiCounter == 2 && this.state.tests.length > 0)
            this.setState({ notiCounter: 3 })

        if (this.state.notiCounter == 3 && this.state.tests.length == 0)
            this.setState({ notiCounter: 2 })

        if (this.state.firstTime) {
            this.setState({ firstTime: false })
            this.setState({ width: window.innerWidth })
        }
    }
    componentDidMount() {
        let tests = TestModel.getTests()
        this.setState({ tests })
        setTimeout(() => {
            this.setState({ opened: true })
        }, 1)
    }


    onAddNewTest() {
        if (!this.state.tests.find(o => o.isSubmitted == false)) {
            let test = { code: 0 }
            test.code = LessonModel.lesson.code
            test.questionsData = TestData
            TestModel.addNewTest(test)
        }
    }

    render() {

        let { name, language } = LessonModel.lesson

        return (
            <>
                <CoursePageStyle
                    opened={this.state.opened}
                    width={this.state.width}
                    margin={this.state.notiCounter}>
                    <div className='main-header-wrapper'>
                        <div className='main-header'>
                            <Title test title={`${name} ${language}`} className='title' />
                            <div className='notification'>
                                <Notification type={this.state.notiCounter} />
                            </div>
                        </div>
                    </div>
                    <div className='test-list'>
                        <TransitionGroup>
                            {
                                this.state.tests.reverse().map((data, i) => (
                                    <CSSTransition
                                        timeout={500}
                                        classNames='items'
                                        key={i}
                                    >
                                        <Course test progress={data.progress} date={data.date} key={i} test_id={data.id} isSubmitted={data.isSubmitted} />
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                    </div>
                </CoursePageStyle>
                <div onClick={() => this.onAddNewTest()} className='bottom'>
                    <Bottom type='new-test' />
                </div>
            </>
        )
    }
}

export default withRouter(observer(CoursePage))