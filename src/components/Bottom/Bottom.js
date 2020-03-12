import React, { Component } from 'react'
import { BottomStyle, BottomQuestion, BottomBackground,
BottomBack } from './BottomStyle'
import Text from '../Text/Text'
import CourseSelector from '../CourseSelector/CourseSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import {  withRouter } from 'react-router-dom'

class Bottom extends Component {

    constructor() {
        super();
        this.state = {
            bottomOpened: false
        }
    }

    render() {
        return (
            <>
            {this.props.type === "main" &&
            <BottomBack>
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
            {/* {this.props.type === 'session' &&
            <>
                <BottomStyle onClick={() => this.setState({bottomOpened: true})}>
                        {!this.state.bottomOpened ?
                        <BottomInner>
                        <div className='caption'>
                            <div>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Добавить новый предмет</Text>
                            </div>
                        </div>
                        </BottomInner>
                        :
                        <BottomCourseSelector>
                        <div className='course-selector'></div>
                         <div className='caption'>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Добавить новый предмет</Text>
                        </div>
                        </BottomCourseSelector>
                        }
                </BottomStyle>
            </>
            } */}
            {this.props.type === 'new-test' &&
                <>
                <BottomQuestion>
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
                <BottomQuestion>
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
            {/* 
            {this.props.type === 'end-test' &&
                <>
                <BottomStyle>
                    <BottomInner>
                        <div className='caption'>
                            <FontAwesomeIcon icon={faChevronLeft} />
                            <Text size='default'>Go back to MyTests</Text>
                        </div>
                    </BottomInner>
                </BottomStyle>
                </>
            }  */}
            </>
        )
    }
}

export default withRouter(Bottom)