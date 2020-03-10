import React, { Component } from 'react'
import { TestStyle, TestQuestion, TestOptions, TestRusults } from './TestStyle'
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
        correctAnswer: null,
        testEnd: false,
        score: 0
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

        const {userAnswer, correctAnswer, score} = this.state
        
        this.setState({
            currentQuestion: this.state.currentQuestion + 1 
        })
        //increment the score
        if(userAnswer === correctAnswer) {
            this.setState({
                score: score + 1
            })
        }
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

    finishHandler = () => {

        const {userAnswer, correctAnswer, score} = this.state
        
        if(this.state.currentQuestion === TestData.length - 1) {
            this.setState({
                testEnd: true
            })

            //increment the score for final question
            if(userAnswer === correctAnswer) {
                this.setState({
                    score: score + 1
                })
            }
        }
    }
    
    render() {
        const { questions, options, currentQuestion, userAnswer, correctAnswer, testEnd } = this.state;

        //new return to show final score
        if(testEnd) {
            return (
                <TestRusults>
                <div>hello, your final score is {this.state.score}</div>
                <div className='test-answer'>
                    need to remember:
                    <div>
                        {TestData.map((data, index) => (
                            <div
                            className='test-answer_item'
                            key={index}>  
                                <Text type='secondary'>
                                    (incorrect ans number) из {TestData.length}
                                </Text>
                                <div> 
                                {data.question}
                                </div>
                                {data.answer}
                            </div>
                        ))}
                    </div>
                </div>
                <Bottom type='end-test'/>
                </TestRusults>
            )
        }

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
                    { currentQuestion < TestData.length - 1 &&
                    <div onClick={this.nextQuestionHandler}>
                        <Bottom type='next-question'/>
                    </div>
                    }
                    { currentQuestion === TestData.length - 1 &&
                    <div onClick={this.finishHandler}>
                        <Bottom type='submit'/>
                    </div>
                    }
                </TestStyle>
            </>
        )
    }
}

export default withRouter(observer(Test))