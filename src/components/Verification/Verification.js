import React, { Component } from 'react'
import { VerificationStyle, VerificationInner, VerificationYes, VerificationNo } from './VerificationStyle'
import { withRouter } from 'react-router-dom'
import Text from '../Text/Text'
import LessonModel from '../../models/lesson'
import { observer } from 'mobx-react'

class Verification extends Component {

    onDelete(code) {
        LessonModel.deleteFromLessons(code)
    }

    // componentDidMount() {
    // LessonModel.getLessonData(this.props.match.params.id)
    // }

    render() {
        return (
            <>
                <VerificationStyle>
                    {!this.props.test ?
                        <VerificationInner>
                            <Text size='default'>Вы уверены, что хотите удалить предмет {`${this.props.name} ${this.props.language}`} ?</Text>
                            <div className='options'>
                                <VerificationYes onClick={() => this.onDelete(this.props.code)}>Да</VerificationYes>
                                <VerificationNo>Нет</VerificationNo>
                            </div>
                        </VerificationInner>
                        :
                        <VerificationInner>
                            <Text size='default'>Если Вы закончите тест - мы не сможем сохранить Ваш прогресс. Вы уверены, что хотите выйти?</Text>
                            <div className='options'>
                                <VerificationYes onClick={() => this.props.history.replace('/course/'+LessonModel.lesson.code)}>Да</VerificationYes>
                                <VerificationNo>Нет</VerificationNo>
                            </div>
                        </VerificationInner>
                        }
                </VerificationStyle>
            </>
        )
    }
}

export default withRouter(observer(Verification))