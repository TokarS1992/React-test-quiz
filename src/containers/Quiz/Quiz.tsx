import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import { IQuiz, IQuizItem } from 'interfaces';
import ActiveQuiz from 'components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from 'components/FinishedQuiz/FinishedQuiz';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
    id: string;
}

export class Quiz extends Component<RouteComponentProps<MatchParams>, IQuiz> {
    readonly state: IQuiz = {
        activeQuestionNumber: 0,
        answerState: null,
        isFinished: false,
        results: {},
        quiz: [{
            id: 1,
            question: 'Какого цвета небо?',
            rightAnswerId: 3,
            answers: [
                {text: 'Черное', id: 1},
                {text: 'Белое', id: 2},
                {text: 'Синее', id: 3},
                {text: 'Желтое', id: 4}
            ]
        }, {
            id: 2,
            question: 'В каком году основали Днепропетровск',
            rightAnswerId: 2,
            answers: [
                {text: '1812', id: 1},
                {text: '1776', id: 2},
                {text: '1524', id: 3},
                {text: '1691', id: 4}
            ]
        }]
    };

    isQuizFinished = (): boolean => {
      return this.state.activeQuestionNumber + 1 === this.state.quiz.length;
    };

    onRetryClickHandler = (): void => {
        this.setState({
            activeQuestionNumber: 0,
            answerState: null,
            isFinished: false,
            results: {}
        });
    };

    onAnswerClickHandler = (answerId: number): void => {
        if (this.state.answerState) {
            const key: number = Number(Object.keys(this.state.answerState)[0]);

            if (this.state.answerState[key] === 'success') return;
        }

        const question: IQuizItem = this.state.quiz[this.state.activeQuestionNumber];
        const results = this.state.results;

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success';
            }

            this.setState({
                answerState: {
                    [answerId]: 'success'
                },
                results
            });

            const timeout = window.setTimeout((): void => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        answerState: null,
                        activeQuestionNumber: this.state.activeQuestionNumber + 1
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {
                    [answerId]: 'error',
                },
                results
            });
        }
    };

    componentDidMount(): void {
        console.log(this.props.match.params.id);
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={classes.Quiz}>
                <div className={classes['Quiz-Wrapper']}>
                    <h1>Ответьте на все вопросы</h1>

                    {
                        this.state.isFinished
                            ? <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetryClick={this.onRetryClickHandler.bind(this)}
                            />
                            : <ActiveQuiz
                                question={this.state.quiz[this.state.activeQuestionNumber].question}
                                answers={this.state.quiz[this.state.activeQuestionNumber].answers}
                                onAnswerClick={this.onAnswerClickHandler.bind(this)}
                                quizLength={this.state.quiz.length}
                                answerNumber={this.state.activeQuestionNumber + 1}
                                answerState={this.state.answerState}
                            />
                    }
                </div>
            </div>
        );
    };
}