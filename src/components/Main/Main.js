import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'

import Text from '../Text/Text'

class Main extends Component {
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
