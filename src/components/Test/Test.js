import React, { Component } from 'react'
import { TestStyle, TestQuestion, TestOptions } from './TestStyle'
import { TestData } from '../../data/TestData'
import { withRouter } from 'react-router-dom'
import Title from '../Title/Title'
import Bottom from '../Bottom/Bottom'
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
                answers: TestData[currentQuestion].answer
            }
        })
    }

    componentDidMount() {
        this.loadTest();
        this.setState({ correctAnswer: TestData[this.state.currentQuestion].answer })
    }

    nextQuestionHandler = () => {
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
        // console.log(TestData[this.state.currentQuestion])
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentQuestion } = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    questions: TestData[currentQuestion].question,
                    options: TestData[currentQuestion].options,
                    answers: TestData[currentQuestion].answer
                }
            })
        }
    }

    setAnswer(answer) {
        this.setState({
            userAnswer: answer
        })
        // console.log(TestData[this.state.currentQuestion].answer)
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
                        <div>
                            {currentQuestion + 1} of {TestData.length}
                        </div>
                        <div>
                            {questions}
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