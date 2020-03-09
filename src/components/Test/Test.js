import React, { Component } from 'react'
import { TestStyle } from './TestStyle'
import { withRouter } from 'react-router-dom'
import Title from '../Title/Title'
import { observer } from 'mobx-react'


class Test extends Component {
    render() {
        return (
            <>
                <TestStyle>
                    <Title />
                </TestStyle>
            </>
        )
    }
}

export default withRouter(observer(Test))