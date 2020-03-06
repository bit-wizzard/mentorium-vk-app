import React, { Component } from 'react'
import { NotificationStyle } from './NotificationStyle'
import Text from '../Text/Text'

class Notification extends Component {
    render() {

        let notifications = [   
                            'Для начала работы - надо указать новый предмет',
                            'В карточке “Казахстан тарихы” будут храниться все ваши тестовики и прогресс. Кликните на карту, что бы начать.',
                            'Самое время начать разбирать тестовики. Нажмите на кнопку снизу, что бы начать' 
                            ]

        let noti_text = notifications[this.props.type];
        console.log(noti_text)
        return (
            <>
                <NotificationStyle>
        <Text size='small' type='secondary'>{noti_text}</Text>
                </NotificationStyle>
            </>

        )
    }
}

export default Notification