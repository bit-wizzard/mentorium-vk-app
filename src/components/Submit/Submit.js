import React, { Component } from 'react'
import { SubmitStyle, SubminContent } from './SubmitStyle'
import { withRouter } from 'react-router'
import Title from '../Title/Title'
import Text from '../Text/Text'
import Bottom from '../Bottom/Bottom'

import TestModel from '../../models/test'
import LessonModel from "../../models/lesson";
import { observer } from 'mobx-react'

class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: null,
            lesson: null
        }
    }

    componentWillMount() {
        let id = this.props.match.params.test_id
        let test = TestModel.appliedTests.find(o => o.id == id)

        let lesson = LessonModel.lesson

        this.setState({
            test, lesson
        })
    }

    nextPath(path) {
        if (path !== this.props.location.pathname)
            this.props.history.push(path)
    }

    render() {
        let { test } = this.state
        let { questionsData, usersAnswers } = test
        return (
            <>
                <SubmitStyle>
                    <div className='test-header'>
                        <Title title={`${this.state.lesson.name} ${this.state.lesson.language}`} main />
                        <div className='notification'>
                            <Text size='small'>Тест окончен. Вы набрали {test.progress}%</Text>
                            {test.progress === 100 ?
                                <Text size='small'>Отличный результат, проходите больше тестов и закрепляйте знания!</Text>
                                :
                                <Text size='small'>Хорошая попытка, запомните правильные ответы ниже и начинайте новый тест</Text>
                            }
                        </div>
                    </div>
                    <div className='submit-content'>
                        {
                            test.wrongAnswers.map((data, i) => (
                                <>
                                    <SubminContent>
                                        <div className='card'>
                                        <div className='question'>
                                            <Text size='small' type='secondary'>Вопрос {data + 1} из {questionsData.length}</Text>
                                            {questionsData[data].question}
                                        </div>
                                        <div className='answer'>  
                                            <Text type='secondary'>Ваш ответ:</Text>                                            
                                            <Text type='secondary'>{usersAnswers[data]}</Text>
                                        </div>
                                        <div className='correct'>
                                            <Text>Правильный ответ:</Text>
                                            {questionsData[data].answer}
                                        </div>
                                        </div>
                                    </SubminContent>
                                </>
                            ))


                        }
                    </div>
                </SubmitStyle>
                <Bottom type='end-test' />
            </>
        )
    }
}

export default withRouter(observer(Submit))