import React, { Component } from 'react'
import { QuestionCardStyle } from './QuestionCardStyle'

class QuestionCard extends Component {
    
    render() {
        return (
            <>
                <QuestionCardStyle>
                    {this.props.questions.map(data => 
                    <div>{data}</div>
                    )}
                </QuestionCardStyle>
            </>
        )
    }
}

export default QuestionCard