import React, { FunctionComponent } from 'react';
import classes from './AnswerItem.module.scss';
import { IAnswerItem } from 'interfaces/props';
import { IAnswerClick, TAnswerState } from 'interfaces';
import Utils from 'utils';

interface IProps extends IAnswerClick {
    answer: IAnswerItem;
    answerState: TAnswerState | null;
}

const AnswerItem: FunctionComponent<IProps> = (props) => {
    const cls = [classes.AnswerItem];

    if (props.answerState) {
        cls.push(classes[Utils.toUpperCase(props.answerState)]);
    }

    return (
        <li onClick={(): void => {
            if (props.onAnswerClick) {
                props.onAnswerClick(props.answer.id)
            }
        }} className={cls.join(' ')}>
            { props.answer.text }
        </li>
    )
};

export default AnswerItem;