import React, { Component } from 'react'
import { VerificationStyle, VerificationInner, VerificationYes, VerificationNo } from './VerificationStyle'
import { withRouter } from 'react-router-dom'
import Text from '../Text/Text'

class Verification extends Component {
    render() {
        let courseId = this.props.match.params.id;
        return (
            <>
                <VerificationStyle>
                    <VerificationInner>
                        <Text>do you really want to delete NAME item?</Text>
                        <div className='options'>
                            <VerificationYes>Yes</VerificationYes>
                            <VerificationNo onClick={() => this.props.history.goBack()}>No</VerificationNo>
                        </div>
                    </VerificationInner>
                </VerificationStyle>
            </>
        )
    }
}

export default withRouter(Verification)