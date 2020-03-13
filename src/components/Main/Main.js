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

    constructor(props) {
        super(props)
        this.state = {
            notificationCounter: 0,
            width: props.window,
        }
    }

    componentWillMount() {
        this.setState({width: window.innerWidth})   
    }

    courses = LessonModel.lessons
    
    componentDidUpdate() {

        if(this.state.notificationCounter == 0 && this.courses.length > 0)
            setTimeout(() => {
                this.setState({notificationCounter: 1})
            }, 200)

        if(this.state.notificationCounter == 1 && this.courses.length == 0) 
            setTimeout(() => {
                this.setState({notificationCounter: 0})
            }, 200)
    } 

    componentDidMount() {
        disableBrowserBackButton();
    }
    render() {
              

        return (
            <>
                <MainStyle 
                width={this.state.width}
                margin={this.state.notificationCounter}>
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
                                timeout={200}
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
