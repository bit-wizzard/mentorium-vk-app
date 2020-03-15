import React, { Component } from 'react'
import { NotificationStyle } from './NotificationStyle'
import Text from '../Text/Text'

class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noti_text: this.notifications[this.props.type]
        }

    }

    notifications = [   
        'Для начала работы - надо указать новый предмет',
        'В карточке будут храниться все ваши тестовики и прогресс. Кликните на карту, что бы начать.',
        'Самое время начать разбирать тестовики. Нажмите на кнопку снизу, что бы начать',
        'Ваш тест готов. Можете кликнуть на карточку и начинать работать'
        ]

    componentWillUpdate() {
        if(this.props.type == 0 || this.props.type == 1)
            setTimeout(() => {this.setState({noti_text: this.notifications[this.props.type]})}, 0)
        else 
            setTimeout(() => {this.setState({noti_text: this.notifications[this.props.type]})}, 0)

    }
            //тут надо буде еще ебнуьб условие для this.props.type 1 || 2    

    // componentWillMount() {
        // alert(this.props.type)
    // }
    render() {           
        return (
            <>
                <NotificationStyle>
                    <Text size='small'>{this.state.noti_text}</Text>
                </NotificationStyle>
            </>

        )
    }
}

export default Notification