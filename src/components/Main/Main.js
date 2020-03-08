import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'
import Text from '../Text/Text'
import Course from '../Course/Course'
import LessonModel from '../../models/lesson'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            notificationCounter: 0
        }
    }

    courses = LessonModel.lessons


    componentDidMount() {
        if(this.courses.length > 0)
            this.setState({notificationCounter: 1})
        
        LessonModel.lessons.map(item => {
            console.log(item)
        })
    }    
        
    render() {
        let course = this.courses.map((data, i) => (
            <Course title={data.name} progress='0' key={i}></Course>
        ))
        

        return (
            <>
                <MainStyle>
                    <Title main ></Title>
                        <Notification type={this.state.notificationCounter}/>
                        <div className='course-list'>
                            { course }
                        </div>
                </MainStyle>
                <Bottom/>
            </>
        )
    }
}

export default Main
