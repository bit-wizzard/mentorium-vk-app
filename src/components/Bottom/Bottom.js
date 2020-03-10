import React, { Component } from 'react'
import { BottomStyle, BottomInner } from './BottomStyle'
import Text from '../Text/Text'
// import CourseSelector from '../CourseSelector/CourseSelector'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import {  withRouter } from 'react-router-dom'

class Bottom extends Component {

    state = {
        active: false
    }

    nextPath(path) {
        if(path != this.props.location.pathname)
            this.props.history.push(path)
    }

    componentDidMount() {
        
    }
    
    render() {
        return (
            <>
            {this.props.type === 'session' &&
            <>
                <BottomStyle activated={this.props.activated}>
                    <BottomInner active={this.state.active}>
                        <div className='caption' onClick={() => this.nextPath('/new')}>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Добавить новый предмет</Text>
                        </div>
                    </BottomInner>
                </BottomStyle>
            </>
            }
            {this.props.type === 'test' &&
                <>
                <BottomStyle>
                    <BottomInner>
                        <div className='caption' onClick={() => this.nextPath('/new')}>
                            <FontAwesomeIcon icon={faPlus} />
                            <Text size='default'>Начать новый тест</Text>
                        </div>
                    </BottomInner>
                </BottomStyle>
                </>
            }
            {this.props.type === 'next-question' &&
                <>
                <BottomStyle>
                    <BottomInner>
                        <div className='caption'>
                            <Text size='default'>Следующий вопрос</Text>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </BottomInner>
                </BottomStyle>
                </>
            }
            {this.props.type === 'submit' &&
                <>
                <BottomStyle>
                    <BottomInner>
                        <div className='caption'>
                            <Text size='default'>Submit</Text>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </BottomInner>
                </BottomStyle>
                </>
            }
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
            }
            </>
        )
    }
}

export default withRouter(Bottom)