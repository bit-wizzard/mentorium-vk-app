import React, { Component } from 'react'
import { NotificationStyle } from './NotificationStyle'
import Text from '../Text/Text'

class Notification extends Component {
    render() {

        let notifications = [   
                            'Для начала работы - надо указать новый предмет',
                            'В карточке будут храниться все ваши тестовики и прогресс. Кликните на карту, что бы начать.',
                            'Самое время начать разбирать тестовики. Нажмите на кнопку снизу, что бы начать',
                            'Ваш тест готов. Можете кликнуть на карточку и начинать работать'
                            ]

        let noti_text = notifications[this.props.type];
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