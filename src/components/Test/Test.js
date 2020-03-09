import React, { Component } from 'react'
import { TestStyle, TestQuestion, TestOptions } from './TestStyle'
import { TestData } from '../../data/TestData'
import { withRouter } from 'react-router-dom'
import Title from '../Title/Title'
import Bottom from '../Bottom/Bottom'
import Text from '../Text/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react'

class Test extends Component {

    state = {
        userAnswer: null,
        currentQuestion: 0,
        options: [],
        correctAnswer: null
    }
    
    loadTest = () => {

        const {currentQuestion} = this.state;
        this.setState(() => {
            return {
                questions: TestData[currentQuestion].question,
                options: TestData[currentQuestion].options,
                answers: TestData[currentQuestion].answer,
                correctAnswer: TestData[currentQuestion].answer
            }
        })
    }

    componentDidMount() {
        this.loadTest();
    }

    nextQuestionHandler = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1 
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentQuestion } = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    questions: TestData[currentQuestion].question,
                    options: TestData[currentQuestion].options,
                    answers: TestData[currentQuestion].answer,
                    correctAnswer: TestData[currentQuestion].answer,
                    userAnswer: null
                }
            })
        }
    }

    setAnswer(answer) {
        this.setState({
            userAnswer: answer
        })
    }
    
    render() {
        const { questions, options, currentQuestion, userAnswer, correctAnswer } = this.state;
        let isAnswerCorrect, answer

        if(userAnswer == correctAnswer){
            isAnswerCorrect = true
        } else {
            isAnswerCorrect = false
        }
        
        return (
            <>
                <TestStyle>
                    <Title title='Name of course' />
                    <div className='test-content'>
                    <TestQuestion>
                        <div
                            className={`test-question
                            ${userAnswer === correctAnswer ? 'correct' :
                            userAnswer && !isAnswerCorrect && 'incorrect' }`}
                        >
                            <div className='status'>
                            <Text type='secondary'>
                                {currentQuestion + 1} из {TestData.length}
                            </Text>
                            {userAnswer === correctAnswer ?
                            <>
                                <FontAwesomeIcon icon={faCheckCircle} color='#31B43D' size='lg' />
                            </>
                            :
                            userAnswer && !isAnswerCorrect &&
                            <>
                            <FontAwesomeIcon icon={faTimesCircle} color='#FF8080' size='lg' />
                            
                            </>}
                            </div>
                            <div>
                                {questions}
                            </div>
                        </div>
                    </TestQuestion>
                    <TestOptions>
                            {options.map(option => (
                                <div
                                key={option.id}
                                className={`test-option
                                ${userAnswer && option == correctAnswer ? 'correct' :
                                userAnswer == option && !isAnswerCorrect && 'incorrect' }
                                `}
                                onClick={() => {
                                    !userAnswer ? this.setAnswer(option) : answer = null
                                }}
                                >
                                    {option}
                                </div>
                            ))}
                    </TestOptions>
                    </div>
                    <div onClick={this.nextQuestionHandler}>
                    <Bottom></Bottom>
                    </div>
                </TestStyle>
            </>
        )
    }
}

export default withRouter(observer(Test))