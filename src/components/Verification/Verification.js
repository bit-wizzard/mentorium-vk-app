import React, { Component } from 'react'
import { VerificationStyle } from './VerificationStyle'
import { withRouter } from 'react-router-dom'

class Verification extends Component {
    render() {
        let courseId = this.props.match.params.id;
        return (
            <>
                <VerificationStyle>
                    <div>{courseId}</div>
                </VerificationStyle>
            </>
        )
    }
}

export default withRouter(Verification)