import React, { Component } from 'react'
import { TestStyle } from './TestStyle'
import { withRouter } from 'react-router-dom'
import LessonModel from '../../models/lesson'
import Title from '../Title/Title'
import { observer } from 'mobx-react'


class Test extends Component {
    render() {
        // let { name, language, code } = LessonModel.lesson
        return (
            <>
                <TestStyle>
                    <Title />
                </TestStyle>
            </>
        )
    }
}

export default withRouter(observer(Test))