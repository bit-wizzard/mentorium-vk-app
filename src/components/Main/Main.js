import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'

import Text from '../Text/Text'
import CourseSelector from '../CourseSelector/CourseSelector'

class Main extends Component {

    nextPath(path) {
        if(path != this.props.location.pathname)
            this.props.history.push(path)
    }

    constructor() {
        super()
    }    
    render() {
        return (
            <>
                <MainStyle onClick={console.log('hello, its me')}>
                    <Title main ></Title>
                    <Notification type='0'></Notification>
                    <div>hello</div>
                </MainStyle>
                <Bottom></Bottom>
            </>
        )
    }
}

export default Main
