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
            <TitleStyle>
                <div className='chevron'>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
                <Text size='big' weight='bold'>{this.props.title}</Text>
            </TitleStyle>
            :
            <TitleStyle>
                <div>
                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => this.props.history.goBack()} />
                </div>
                <Text size='big' weight='bold'>{this.props.title}</Text>
            </TitleStyle>
            }
            
            </>
        )
    }
} 
export default withRouter(Title)