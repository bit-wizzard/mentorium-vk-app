import React, { Component } from 'react'
import { TestStyle, TestQuestion, TestOptions, TestRusults } from './TestStyle'
import { withRouter } from 'react-router-dom'
import Title from '../Title/Title'
import Bottom from '../Bottom/Bottom'
import Text from '../Text/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { observer } from 'mobx-react'
import LessonModel from '../../models/lesson'
import TestModel from '../../models/test'

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            width: props.window,
            elHeight: 0,
            
            options: [],
            userAnswer: null,
            currentQuestion: 0,
            correctAnswer: null,
            
            id: TestModel.test.id,
            questions: TestModel.test.questionsData.map(data => data.question),
            score: 0,
            
            correctAnswers: [],
            wrongAnswers: [],
            blankAnswers: [],

            testEnd: false
        }
    }
    componentWillMount() {
        this.setState({width: window.innerWidth})   
    }
    
    
    loadTest = () => {
        const {currentQuestion} = this.state;
        
        this.setState(() => {
            return {
                questions: TestModel.test.questionsData.map(data => data.question),
                options: TestModel.test.questionsData[currentQuestion].options,
                answers: TestModel.test.questionsData[currentQuestion].answer,
                correctAnswer: TestModel.test.questionsData[currentQuestion].answer
            }
        })
    }
    
    componentDidMount() {
        this.loadTest();

        const elHeight = this.divElement.clientHeight;
        this.setState({ elHeight })
    }
    
    nextQuestionHandler = () => {

        const {userAnswer, correctAnswer, score, blankAnswers, currentQuestion } = this.state
        
        let indexInBlank = blankAnswers.indexOf(currentQuestion)

        if(userAnswer && indexInBlank !== -1){
            this.setState({
                blankAnswers: blankAnswers.filter(i => i !== currentQuestion)
            })
        }else if(!userAnswer && indexInBlank === -1){
            this.setState({
                blankAnswers: [...blankAnswers, currentQuestion].sort()
            })
        }

        let nextQ = blankAnswers.find(item => item > currentQuestion)
        if(nextQ){
            this.setState({
                currentQuestion: nextQ 
            })
        }else{
            this.setState({
                currentQuestion: currentQuestion + 1
            })
        }
        
        if(userAnswer === correctAnswer)
            this.setState({
                score: score + 1
            })
    }

    componentDidUpdate(prevProps, prevState) {
        const { currentQuestion } = this.state;
        if(this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    questions: TestModel.test.questionsData.map(data => data.question),
                    options: TestModel.test.questionsData[currentQuestion].options,
                    answers: TestModel.test.questionsData[currentQuestion].answer,
                    correctAnswer: TestModel.test.questionsData[currentQuestion].answer,
                    userAnswer: null
                }
            })
        }
    }

    setAnswer(answer) {
        if(this.state.correctAnswer === answer){
            this.setState(prevState => ({
                userAnswer: answer,
                correctAnswers: [...prevState.correctAnswers, answer].sort()
            }))
        }else{
            this.setState(prevState => ({
                userAnswer: answer,
                wrongAnswers: [...prevState.wrongAnswers, answer].sort()
            }))
        }
    }

    finishHandler = () => {

        const {userAnswer, correctAnswer, score, blankAnswers, currentQuestion} = this.state

        if(userAnswer && blankAnswers.length > 0){
            this.setState({
                currentQuestion: blankAnswers[0]
            })
        }
        
        if(userAnswer && blankAnswers.length === 0){
            let { id, questionsData, correctAnswers, wrongAnswers, score, questions } = this.state
            if(correctAnswer === userAnswer){
                score += 1
            }

            let test = {
                id,
                questionsData,
                correctAnswers,
                wrongAnswers,
                progress: (score*100)/questions.length
            }
            TestModel.submitTest(test)
        }

        if(!userAnswer && blankAnswers.length > 0){
            if(blankAnswers.indexOf(currentQuestion) !== -1)
                this.setState({
                    currentQuestion: blankAnswers[0]
                })
            else
                this.setState({
                    blankAnswers: [...blankAnswers, currentQuestion],
                    currentQuestion: blankAnswers[0]
                })
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
                        {TestModel.test.questionsData.map((data, index) => (
                            <div
                            className='test-answer_item'
                            key={index}>  
                                <Text type='secondary'>
                                    (incorrect ans number) из {TestModel.test.questionsData.length}
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

        if(userAnswer === correctAnswer){
            isAnswerCorrect = true
        } else {
            isAnswerCorrect = false
        }
        
        return (
            <>
                <TestStyle>
                    <div className='test-header'
                    ref = { (divElement) => {this.divElement = divElement}}
                    >
                        <div className='test-header-fixed'>
                    <Title title={`${LessonModel.lesson.name} ${LessonModel.lesson.language}`} />
                    <div className='test-content'>
                    <TestQuestion>
                        <div className={`test-content-inner active-slide-${currentQuestion}`}>
                        <div 
                            className='test-question-wrapper'
                            style={{
                                'transform': `translateX(-${currentQuestion*(100/TestModel.test.questionsData.length)}%)`
                            }}
                        >
                        {questions.map((data, i) => 
                        <div
                            key={i}
                            className={`test-question
                            ${userAnswer === correctAnswer ? 'correct' :
                            userAnswer && !isAnswerCorrect && 'incorrect' }`}
                        >
                            <div className='status'>
                            <Text type='secondary'>
                                Вопрос {currentQuestion + 1} из {TestModel.test.questionsData.length}
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
                            <div className='questions'>
                                {data}
                            </div>
                        </div>
                        )}
                        <div></div>
                        </div>
                        </div>
                    </TestQuestion>
                    </div>
                    </div>
                    </div>
                    <TestOptions 
                    margin={this.state.elHeight}
                    width={this.state.width}>
                            {options.map(option => (
                        <div className="test-option-wrapper">
                                <div
                                key={option.id}
                                className={`test-option
                                ${userAnswer && option === correctAnswer ? 'correct' :
                                userAnswer === option && !isAnswerCorrect && 'incorrect' }
                                `}
                                onClick={() => {
                                    !userAnswer ? this.setAnswer(option) : answer = null
                                }}
                                >
                                    {option}
                                </div>
                            </div>
                            ))}
                    </TestOptions>
                    { currentQuestion < TestModel.test.questionsData.length - 1 &&
                    <div onClick={this.nextQuestionHandler}>
                        <Bottom type='next-question'/>
                    </div>
                    }
                    { currentQuestion === TestModel.test.questionsData.length - 1 &&
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