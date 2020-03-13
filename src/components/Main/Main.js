import React, { Component, useRef, useLayoutEffect, useState } from 'react'
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
            prevState: !this.firstEnter
        }
    }

    // componentWillMount() {
        // this.setState({width: window.innerWidth})
    // }
    
    courses = LessonModel.lessons
    
    

    componentWillReceiveProps() {
        this.setState({width: window.innerWidth}) 
    } 

    componentDidMount() {
        disableBrowserBackButton();
        // alert('hello')
        // this.setState({width: window.innerWidth})

    }
    componentDidUpdate(prevState) {

        if(this.state.notificationCounter == 0 && this.courses.length > 0)
                this.setState({notificationCounter: 1})

        if(this.state.notificationCounter == 1 && this.courses.length == 0) 
                this.setState({notificationCounter: 0})

        if(this.state.firstEnter) {
            this.setState({firstEnter: false})
        }
    }
    render() {
              

        return (
            <>
                <MainStyle 
                width={this.state.width}
                margin={this.state.notificationCounter}
                firstEnter={this.state.firstEnter}>
                    <div className='main-header'>
                        {this.state.width}
                    <Title main ></Title>
                    componentDidMount
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
