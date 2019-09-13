import React, { Component } from 'react';

class Questions extends Component {
    changeBackgroundColor = () => {
    }
    handleClick = () => {
    }
    render() {
        const {questions} = this.props;
        const questionsList = questions.map( (question, index) => {
            return(
                <div key={index} className="ques-body">
                    <div className="ques-seq">{index+1}</div> 
                    <div className="ques-disc">{question}</div>
                    <div className="ques-edit" onClick={this.handleClick}>:</div>
                </div>
            )
        })
        return (
            <div>
                {questionsList}
            </div>
        );
    }
}

export default Questions;