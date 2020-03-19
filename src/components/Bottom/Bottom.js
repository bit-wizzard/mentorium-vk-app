import React, { Component } from 'react'
import { BottomStyle, BottomQuestion, BottomBackground,
BottomBack } from './BottomStyle'
import Text from '../Text/Text'
import CourseSelector from '../CourseSelector/CourseSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {  withRouter } from 'react-router-dom'
import LessonModel from '../../models/lesson'


class Bottom extends Component {

    constructor() {
        super();
        this.state = {
            bottomOpened: false,
            // appear: false
        }
    }
    goToTests() {
        this.props.history.replace('/course/' + LessonModel.lesson.code)
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({appear: true})
        }, 1)
    }

    render() {
        return (
            <>
            {this.props.type === "main" &&
            <BottomBack bottomOpened={this.state.bottomOpened}>
                <BottomBackground onClick={() => this.setState({bottomOpened: false})} bottomOpened={this.state.bottomOpened}></BottomBackground>
                <BottomStyle 
                bottomOpened={this.state.bottomOpened}>
                    
                        <div className='course-selector' onClick={() => this.setState({bottomOpened: false})}> 
                            <div 
                            className='course-selector-inner'>
                                <CourseSelector></CourseSelector>
                            </div>
                        </div>
                        <div className='caption' onClick={() => this.setState({bottomOpened: true})}>
                            <div>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Добавить новый предмет</Text>
                            </div>
                        </div>
                </BottomStyle>
            </BottomBack>
            }
            {this.props.type === 'new-test' &&
                <>
                <BottomQuestion
                //  appear={this.state.appear}
                 >
                <BottomStyle>
                        <div className='caption'>
                            <div>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Начать новый тест</Text>
                            </div>
                        </div>
                </BottomStyle>
                </BottomQuestion>
                </>
            }
            {this.props.type === 'next-question' &&
                <>
                <BottomQuestion>
                <BottomStyle>
                        <div className='caption'>
                            <div>
                            <Text size='default'>Следующий вопрос</Text>
                            <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                </BottomStyle>
                </BottomQuestion>
                </>
            }
            {this.props.type === 'submit' &&
                <>
                <BottomQuestion 
                // onClick={() => this.props.history.goBack()}
                >
                <BottomStyle>
                        <div className='caption'>
                            <div>
                            <Text size='default'>Submit</Text>
                            <FontAwesomeIcon icon={faChevronRight} />
                            </div>
                        </div>
                </BottomStyle>
                </BottomQuestion>
                </>
            }
            {this.props.type === 'end-test' &&
                <>
                <BottomQuestion 
                onClick={() => this.goToTests()}
                >
                <BottomStyle>
                        <div className='caption'>
                            <div>
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <Text size='default'>Венуться к моим тестам</Text>
                            </div>
                        </div>
                </BottomStyle>
                </BottomQuestion>
                </>
            }
            </>
        )
    }
}

export default withRouter(Bottom)