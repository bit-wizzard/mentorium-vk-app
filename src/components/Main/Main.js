import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'

import Text from '../Text/Text'
import CourseSelector from '../CourseSelector/CourseSelector'

class Main extends Component {

    constructor() {
        super()
    }    
    render() {
        return (
            <>
                <MainStyle>
                    <Title main ></Title>
                    <Notification type='0'></Notification>
                    <div>hello</div>
                </MainStyle>
                <CourseSelector 
                main
                ></CourseSelector>
                <Bottom></Bottom>
            </>
        )
    }
}

export default Main
