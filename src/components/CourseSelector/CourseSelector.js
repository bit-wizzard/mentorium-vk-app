import React, { Component } from 'react'
import { 
    CourseSelectorStyle, CourseSelectorInner, CourseSelectorInnerActivated,
    CourseSelectorBack, CourseSelectorBackground
} from './CourseSelectorStyle'
import Text from '../Text/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { withRouter, Link } from 'react-router-dom'

// import { LessonModel } from '../../models/lesson'

class CourseSelector extends Component {

    constructor(props) {
        super()
        this.state = {
            active: false,
        }
    }

    nextPath(path) {
        if(path != this.props.location.pathname)
            this.props.history.push(path)
    }

    onAddLesson(lesson) {
        // LessonModel.addLesson(lesson)
        console.log(lesson)
    }

    
    componentDidMount() {

        if (this.props.location.pathname == '/') {}
    

        if(this.props.activated)
            this.setState({ active: true })
        else {
            // setTimeout(() => {
            //     this.setState({
            //         active: true
            //     })
            // }, 0)
            this.setState({ active: true })
        }
    }    
    
    render() {

        let courses = [
            {
                name: "Kazakh history",
                language: "KAZ"
            },
            {
                name: "Kazakh history",
                language: "RUS"
            },
            {
                name: "Math history",
                language: "RUS"
            }
        ]

        let course = courses.map((data, i) => (
            <div className='selectorInnerActivated'
            onClick={this.onAddLesson(data)}
            key={i}>
                <Text size='default'>{data.name}</Text>
                <Text size='default'>({data.language})</Text>
            </div>
        ))

    
        return (
            <>  <CourseSelectorBack>
                <CourseSelectorBackground onClick={() => {this.nextPath('./')}}></CourseSelectorBackground>
                <CourseSelectorStyle 
                main={this.props.main}
                active={this.state.active}>
                    {this.props.activated ?
                    <>
                    <CourseSelectorInnerActivated>
                        {course}
                        <div className='selectorInnerActivated'>
                        <Text type='secondary' size='default'>Название предмета</Text>
                        <FontAwesomeIcon icon={faChevronUp} color='#898989'/>
                        </div>
                    </CourseSelectorInnerActivated>
                    </>
                    :
                    <>
                    <CourseSelectorInner 
                    active={this.state.active}
                    onClick={() => this.nextPath('/course-selector')}>
                        <Text type='secondary' size='default'>Название предмета</Text>
                        <FontAwesomeIcon icon={faChevronUp} color='#898989'/>
                    </CourseSelectorInner>
                    </>
                    }
                </CourseSelectorStyle>
                </CourseSelectorBack>
            </>
        )
    }
}

export default withRouter(CourseSelector)