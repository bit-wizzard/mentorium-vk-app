import React, { Component } from 'react'
import { TitleStyle, VerificationStyle } from './TitleStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import disableBrowserBackButton from 'disable-browser-back-navigation';

import Text from '../Text/Text'
import Verification from '../Verification/Verification'

class Title extends Component {

    constructor() {
        super()
        this.state = {
            // toMain: false
            verificationOn: false
        }

    }

    
    verification() {
        this.setState({ verificationOn: true })
    }

    // toMain() {
    // setTimeout(() => {
    // this.props.history.goBack()
    // }, 1500)
    // }

    // componentWillMount() {
    // window.onbeforeunload = function() { return "Your work will be lost."; };
    // }

    render() {
        // const {history} = this.props
        // window.onpopstate = (event) => {
        //     event.preventDefault();
        //     if(this.props.location.pathname === '/' && this.state.toMain === false) {
        //             this.setState({toMain: true})
        //             // alert('hello') one time set state
        //       }
        // }
        return (
            <>
                {this.props.main &&
                    <TitleStyle>
                        <div className='chevron'>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <Text size='big' weight='bold'>{this.props.title}</Text>
                    </TitleStyle>
                }
                {this.props.test &&
                    <TitleStyle>
                        <VerificationStyle verificationOn={this.state.verificationOn} onClick={() => this.setState({verificationOn: false})}>
                            <Verification test></Verification>
                        </VerificationStyle>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={() => this.verification()} />
                        <Text size='big' weight='bold'>{this.props.title}</Text>
                    </TitleStyle>
                }
                {this.props.coursePage &&
                    <TitleStyle verificationOn={this.state.verificationOn}>
                        <FontAwesomeIcon icon={faChevronLeft} onClick={() => this.props.history.goBack()} />
                        <Text size='big' weight='bold'>{this.props.title}</Text>
                    </TitleStyle>
                }


            </>
        )
    }
}
export default withRouter(Title)