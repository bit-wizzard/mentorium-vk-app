import React, { Component } from 'react'
import { TitleStyle } from './TitleStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Text from '../Text/Text'

class Title extends Component {
    render() {
        return (
            <>
            { this.props.main ?
            <>
            <Text size='big' weight='bold'>Ваши предметы</Text>
            </>
            :
            <>
            <TitleStyle>
                <FontAwesomeIcon icon={faChevronLeft} />
                <Text size='big' weight='bold'>Казахстан тарихы</Text>
            </TitleStyle>
            </>
            }
            </>
        )
    }
} 
export default Title