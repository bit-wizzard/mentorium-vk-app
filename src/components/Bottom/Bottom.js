import React, { Component } from 'react'
import { BottomStyle, BottomInner } from './BottomStyle'
import Text from '../Text/Text'
import CourseSelector from '../CourseSelector/CourseSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class Bottom extends Component {

    state = {
        active: false
    }
    
    render() {
        return (
            <>
                <BottomStyle>
                        <CourseSelector active={this.state.active}></CourseSelector>
                    <BottomInner active={this.state.active}>
                        <div className='caption' onClick={()=>this.setState(prevState=>
                            ({active: !prevState.active}))}>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Добавить новый предмет</Text>
                        </div>
                    </BottomInner>
                </BottomStyle>
            </>
        )
    }
}

export default Bottom