import React, { Component } from 'react'
import { BottomStyle, BottomInner } from './BottomStyle'
import Text from '../Text/Text'
import CourseSelector from '../CourseSelector/CourseSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { withRouter, Link } from 'react-router-dom'

class Bottom extends Component {
    //()=>this.setState(prevState=>({active: !prevState.active}))

    state = {
        active: false
    }

    // nextPath(path) {
        // <Route to={path}></Route>
    // }

    render() {
        return (
            <>
                <BottomStyle activated={this.props.activated}>
                        {/* <CourseSelector></CourseSelector> */}
                    <BottomInner active={this.state.active}>
                        <Link to='/new'>
                        <div className='caption'>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Добавить новый предмет</Text>
                        </div>
                        </Link>
                    </BottomInner>
                </BottomStyle>
            </>
        )
    }
}

export default withRouter(Bottom)