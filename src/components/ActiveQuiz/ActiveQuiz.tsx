import React, { FunctionComponent } from 'react';
import classes from './ActiveQuiz.module.scss';
import { IActiveQuiz } from 'interfaces';
import AnswersList from './AnwersList/AnswersList';

const ActiveQuiz: FunctionComponent<IActiveQuiz> = (props): JSX.Element => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes['ActiveQuiz-Question']}>
                <span>
                    <strong>{ props.answerNumber }.</strong>&nbsp;
                    { props.question }
                </span>

                <small>{ props.answerNumber } из { props.quizLength }</small>
            </p>

            <AnswersList
                onAnswerClick={props.onAnswerClick}
                answers={props.answers}
                answerState={props.answerState}
            />
        </div>
    );
};

export default ActiveQuiz;