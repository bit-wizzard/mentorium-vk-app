import React, { Component } from 'react'
import { VerificationStyle, VerificationInner, VerificationYes, VerificationNo } from './VerificationStyle'
import { withRouter } from 'react-router-dom'
import Text from '../Text/Text'
import LessonModel from '../../models/lesson'
import { observer } from 'mobx-react'

class Verification extends Component {
    
    onDelete(code) {
        LessonModel.deleteFromLessons(code)
        this.props.history.goBack()
    }

    componentDidMount() {
        LessonModel.getLessonData(this.props.match.params.id)
    }

    render() {
        let { name, language, code } = LessonModel.lesson
        return (
            <>
                <VerificationStyle>
                    <VerificationInner>
                        <Text>Вы уверены, что хотите удалить предмет {`${name} (${language})`} ?</Text>
                        <div className='options'>
                            <VerificationYes onClick={() => this.onDelete(code)}>Yes</VerificationYes>
                            <VerificationNo onClick={() => this.props.history.goBack()}>No</VerificationNo>
                        </div>
                    </VerificationInner>
                </VerificationStyle>
            </>
        )
    }
}

export default withRouter(observer(Verification))