import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'

class Main extends Component {
    
    render() {

        let courses = [
        ]

        let course = courses.map((data, i) => (
            <div className='selectorInnerActivated'
            onClick={this.onAddLesson(data)}
            key={i}>
                <Text size='default'>{data.name}</Text>
                <Text size='default'>({data.language})</Text>
            </div>
        ))

        return (
            <>
                <MainStyle>
                    <Title main ></Title>
                    <Notification type='0'></Notification>
                </MainStyle>
                <Bottom></Bottom>
            </>
        )
    }
}

export default Main
