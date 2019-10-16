import React from 'react';
import classes from './FinishedQuiz.module.scss';
import { IFinishedQuiz } from 'interfaces/props';
import { IQuizItem, TAnswerState } from 'interfaces/states';
import Utils from '../../utils';

interface IProps extends IFinishedQuiz {
    onRetryClick(): void;
}

const FinishedQuiz = (props: IProps): JSX.Element => {
    const successCount: number = Object.values(props.results).filter((answer: TAnswerState) => answer === 'success').length;

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {
                    props.quiz.map((quizItem: IQuizItem, index): JSX.Element => {
                        const cls = [
                            'fa',
                            props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            (props.results[quizItem.id] && classes[Utils.toUpperCase(props.results[quizItem.id])]) || ''
                        ];

                        return (
                            <li
                                key={quizItem.id}
                            >
                                <strong>{ index + 1 }</strong>.&nbsp;
                                {quizItem.question}
                                <i className={cls.join('  ')}/>
                            </li>
                        )
                    })
                }
            </ul>

            <p>Правильно { successCount } из { props.quiz.length }</p>

            <div>
                <button onClick={() => {props.onRetryClick()}}>Повторить</button>
            </div>
        </div>
    );
};

export default FinishedQuiz;