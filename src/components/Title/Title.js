import React, { Component } from 'react'
import { TitleStyle } from './TitleStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'

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
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => this.props.history.goBack()} />
                <Text size='big' weight='bold'>{this.props.title}</Text>
            </TitleStyle>
            </>
            }
            </>
        )
    }
} 
export default withRouter(Title)