import React, { Component } from 'react'
import { TestStyle } from './TestStyle'
import { withRouter } from 'react-router-dom'
import LessonModel from '../../models/lesson'
import Title from '../Title/Title'



class Test extends Component {
    render() {
        // let { name, language, code } = LessonModel.lesson

        return (
            <>
                <TestStyle>
                    <Title title='Kazakhstan history'/>
                </TestStyle>
            </>
        )
    }
}

export default withRouter(Test)