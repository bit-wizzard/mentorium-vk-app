import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'

class Main extends Component {

<<<<<<< HEAD

=======
    // componentDidMount() {
    //     if(this.props.history.action === "POP"){

    //     }
    // }
>>>>>>> a0352ad96a5ec70b06061e8dcd8f3f81c97f9365
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
