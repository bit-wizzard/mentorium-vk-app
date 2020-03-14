import React, { Component } from 'react'
import { MainStyle } from './MainStyle'
import Title from '../Title/Title'
import Notification from '../Notification/Notification'
import Bottom from '../Bottom/Bottom'
import Course from '../Course/Course'
import LessonModel from '../../models/lesson'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import disableBrowserBackButton from 'disable-browser-back-navigation';
import {observer} from 'mobx-react'


class Main extends Component {


    constructor() {
        super()
        this.state = {
            width: null,
            notificationCounter: 0,
            firstEnter: true,
        }
    }
    
    courses = LessonModel.lessons
    
    

    componentWillMount() {
        
        if(this.courses.length > 0)
            this.setState({notificationCounter: 1})
    }


    componentDidMount() {
        disableBrowserBackButton();
    }
    nextPage() {
        this.setState({next: true})
    }

    componentDidUpdate() {

        if(this.state.notificationCounter == 0 && this.courses.length > 0)
                this.setState({notificationCounter: 1})

        if(this.state.notificationCounter == 1 && this.courses.length == 0) 
                this.setState({notificationCounter: 0})

        if(this.state.firstEnter) {
            this.setState({firstEnter: false})
            this.setState({width: window.innerWidth})
        }

    }
    render() {
              

        return (
            <>
                <MainStyle 
                next={this.state.next}
                width={this.state.width}
                margin={this.state.notificationCounter}
                firstEnter={this.state.firstEnter}>
                    <div className='toggle'></div>
                    <div className='main-header'>
                    <Title main ></Title>
                            <div className='notification' >
                                <Notification type={this.state.notificationCounter}/>
                            </div>
                            </div>
                        <div className='course-list'>
                            <TransitionGroup>
                        {
                            this.courses.map((data, i) => (
                                <CSSTransition
                                timeout={500}
                                classNames='items'
                                key={i}
                                >
                                    <Course 
                                        title={data.name} 
                                        progress='0' 
                                        language={data.language} 
                                        id={data.code} 
                                        key={i}/> 
                                </CSSTransition>
                            ))
                         }
                        </TransitionGroup>
                        </div>
                </MainStyle>
                <Bottom type='main'/>
            </>
        )
    }
}

export default observer(Main)
