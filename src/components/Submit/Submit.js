import React, { Component } from 'react'
import { SubmitStyle } from './SubmitStyle'
import { withRouter } from 'react-router'

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
        let id = this.props.match.params.test_id
        this.setState({ 
            test: TestModel.appliedTests.find(o => o.id == id)
         })
         alert(id)
    }
    nextPath(path) {
        if(path !== this.props.location.pathname)
            this.props.history.push(path)
    }
    
    render() {
        return (
            <>
                <SubmitStyle>
                    hello
                </SubmitStyle>
            </>
        )
    }
}

export default withRouter(observer(Submit))