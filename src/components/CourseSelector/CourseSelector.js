import React, { Component } from 'react'
import { CourseSelectorStyle, CourseSelectorInner } from './CourseSelectorStyle'
import Text from '../Text/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


class CourseSelector extends Component {
    render() {
        return (
            <>
                <CourseSelectorStyle active={this.props.active}>
                    <CourseSelectorInner active={this.props.active}>
                        <Text type='secondary' size='default'>Название предмета</Text>
                        <FontAwesomeIcon icon={faChevronUp} color='#898989'/>
                    </CourseSelectorInner>
                </CourseSelectorStyle>
            </>
        )
    }
}

export default CourseSelector