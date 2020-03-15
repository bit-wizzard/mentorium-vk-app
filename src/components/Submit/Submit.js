import React, { Component } from 'react'
import { SubmitStyle } from './SubmitStyle'
import { withRouter } from 'react-router'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Bottom from '../Bottom/Bottom'

import TestModel from '../../models/test'
import { observer } from 'mobx-react'

class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: null,
        }
    }
    componentDidMount() {
    }
    nextPath(path) {
        if(path !== this.props.location.pathname)
            this.props.history.push(path)
    }
    
    render() {
        return (
            <>
                <SubmitStyle>
                    <div className='test-header'>
                        <Title title='lessontitle and flag' main/>
                        <div className='notification'>
                        <Text size='small'>Congrats, you've done test. Your score is 70%</Text>
                        <Text size='small'>Try to remember incorrect answers</Text>
                        </div>
                    </div>

                </SubmitStyle>
                <Bottom type='end-test'/>
            </>
        )
    }
}

export default withRouter(observer(Submit))