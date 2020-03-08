import React, { Component } from 'react'
import { CourseStyle } from './CourseStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import Text from '../Text/Text'


class Course extends Component {    

    onClose(name) {
        console.log(name)
    }
    
    render() {
        return (
            <>
                <CourseStyle>
                    <div className='title'>
                        <Text size='default'>{this.props.title}</Text>
                    </div>
                    <div className='progress'>
                        <FontAwesomeIcon icon={faCheckCircle} color='#31B43D' size='lg'/>
                        <div>{this.props.progress}%</div>
                    </div>
                    <div className='delete' onClick={() => this.onClose(this.props.title)}>
                        <FontAwesomeIcon icon={faTimes} color='#999'/>
                    </div>
                </CourseStyle>
            </>
        )
    }
}

export default Course