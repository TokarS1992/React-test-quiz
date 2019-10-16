import React, { FunctionComponent } from 'react';
import { IFinishedQuiz } from 'interfaces/props';
import { IQuizItem, TAnswerState } from 'interfaces/states';
import Button from 'UI/Button/Button';
import Utils from 'utils';
import { Link } from 'react-router-dom';

import classes from './FinishedQuiz.module.scss';

interface IProps extends IFinishedQuiz {
    onRetryClick(): void;
}

const FinishedQuiz: FunctionComponent<IProps> = (props): JSX.Element => {
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
                <Button
                    onClick={props.onRetryClick}
                    type='Primary'
                >
                    Повторить
                </Button>

                <Link to='/'>
                    <Button
                        type='Success'
                    >
                        Перейти в список тестов
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default FinishedQuiz;