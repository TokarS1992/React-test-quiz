import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import { IQuiz } from 'interfaces';
import ActiveQuiz from 'components/ActiveQuiz/ActiveQuiz';

export default class Quiz extends Component<any, IQuiz> {
    state: IQuiz = {
        quiz: []
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={classes.Quiz}>
                <div className={classes['Quiz-Wrapper']}>
                    <h1>Quiz works!</h1>

                    <ActiveQuiz/>
                </div>
            </div>
        );
    };
}