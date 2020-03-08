import React, { Component } from 'react'
import { CourseStyle, TestStyle } from './CourseStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import Text from '../Text/Text'
import LessonModel from '../../models/lesson'

class Course extends Component {    

    nextPath(path) {
        if(path != this.props.location.pathname)
            this.props.history.push(path)
    }
    
    onClose(name) {
        this.nextPath('/close/' + this.props.id)
        LessonModel.getLessonData(this.props.id)
    }

    onChangeDirection(id) {
        this.nextPath('/course/' + id)
        LessonModel.getLessonData(this.props.id)
    }
    
    render() {
        return (
            <>
                {!this.props.test ?
                <>
                <CourseStyle>
                    <div className='card' onClick={() => this.onChangeDirection(this.props.id)}>
                    <div className='title'>
                        <Text size='default'>{this.props.title}</Text>
                        <Text size='default'>({this.props.language})</Text>
                    </div>
                    <div className='progress'>
                        <FontAwesomeIcon icon={faCheckCircle} color='#31B43D' size='lg'/>
                        <div>{this.props.progress}%</div>
                    </div>
                    </div>
                    <div className='delete' onClick={() => this.onClose(this.props.title)}>
                        <FontAwesomeIcon icon={faTimes} color='#999'/>
                    </div>
                </CourseStyle>
                </>
                :
                <>
                <TestStyle>
                    <div className='progress'>
                        <FontAwesomeIcon icon={faCheckCircle} color='#31B43D' size='lg'/>
                        <div>{ this.props.progress }%</div>
                    </div>
                    <div className='date'>{ this.props.date }</div>
                </TestStyle>
                </>
                }
            </>
        )
    }
}

export default withRouter(Course)