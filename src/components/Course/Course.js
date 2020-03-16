import React, { Component } from 'react'
import { CourseStyle, TestStyle, CourseVerification } from './CourseStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom'
import Text from '../Text/Text'
import Verification from '../Verification/Verification'
import LessonModel from '../../models/lesson'
import TestModel from '../../models/test'

class Course extends Component {  
    constructor() {
        super()
        this.state = {
            onDelete: false,
            // onEnter: false
            }
    }

        nextPath(path) {
            if(path !== this.props.location.pathname)
                this.props.history.push(path)
        }
        
    onClose() {
        this.setState({
            onDelete: true
        })
        LessonModel.getLessonData(this.props.id)
    }

    onChangeDirection(id) {
        this.nextPath('/course/' + id)
            LessonModel.getLessonData(this.props.id)
        // this.setState({ onEnter: true })
        // setTimeout(() => {
            // this.nextPath('/course/' + id)
            // LessonModel.getLessonData(this.props.id)
        // }, 1000)
    }

    onOpenTest(id) {
        TestModel.setTest(id)
        this.nextPath('/test/' + id)
        //need to add modes for the test
    }
    
    render() {
        return (
            <>
                {!this.props.test ?
                <>
                <CourseStyle 
                // onEnter={this.state.onEnter}
                >
                    {/* <div className='next-page-wrapper'> */}
                    {/* <div className='next-page'></div> */}
                    {/* </div> */}
                    <div className='card' onClick={() => this.onChangeDirection(this.props.id)}>
                    <div className='title'>
                        <Text size='default'>{this.props.title}</Text>
                        <Text size='default'>{this.props.language}</Text>
                    </div>
                    <div className='progress'>
                        <FontAwesomeIcon icon={faCheckCircle} color='#31B43D' size='lg'/>
                        <div>{this.props.progress}%</div>
                    </div>
                    </div>
                    <div className='delete' onClick={() => this.onClose()}>
                        <FontAwesomeIcon icon={faTimes} color='#999'/>
                    </div>
                    <CourseVerification onDelete={this.state.onDelete} onClick={() => this.setState({onDelete: false})}>
                        <Verification lesson={LessonModel.lesson}></Verification>
                    </CourseVerification>
                </CourseStyle>
                </>
                :
                <>
                <TestStyle onClick={() => this.onOpenTest(this.props.test_id)}>
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