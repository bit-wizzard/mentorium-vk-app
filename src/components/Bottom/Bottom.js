import React, { Component } from 'react'
import { BottomStyle, BottomInner } from './BottomStyle'
import Text from '../Text/Text'
import CourseSelector from '../CourseSelector/CourseSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {  withRouter } from 'react-router-dom'

class Bottom extends Component {
    //()=>this.setState(prevState=>({active: !prevState.active}))

    state = {
        active: false
    }

    nextPath(path) {
        if(path != this.props.location.pathname)
            this.props.history.push(path)
    }
    
    render() {
        return (
            <>
                <BottomStyle>
                        {/* <CourseSelector active={this.state.active}></CourseSelector> */}
                    <BottomInner active={this.state.active}>
                        <div className='caption' onClick={() => this.nextPath('/new')}>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Добавить новый предмет</Text>
                        </div>
                    </BottomInner>
                </BottomStyle>
            </>
        )
    }
}

export default withRouter(Bottom)