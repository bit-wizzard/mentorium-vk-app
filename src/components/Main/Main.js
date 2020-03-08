import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'

class Main extends Component {

    // componentDidMount() {
    //     if(this.props.history.action === "POP"){

    //     }
    // }
    render() {
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
