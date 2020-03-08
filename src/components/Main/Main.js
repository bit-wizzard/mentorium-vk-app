import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'
import Text from '../Text/Text'
import Course from '../Course/Course'
class Main extends Component {

    constructor() {
        super()
        this.state = {
            notificationCounter: 0
        }
    }

    courses = [
        {
            name: 'hello',
            language: 'rsu'
        },
        {
            name: 'helloooo',
            language: 'yopta'
        }
    ]


    componentDidMount() {
        if(this.courses.length > 0)
            this.setState({notificationCounter: 1})
    }    
        
    render() {
        let course = this.courses.map((data, i) => (
            <Course title={data.name} progress='0' language={data.language} key={i}></Course>
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
