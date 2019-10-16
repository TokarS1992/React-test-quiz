import React from 'react';
import classes from './AnswersList.module.scss';
import AnswerItem from './AnswerItem/AnswerItem';
import { IAnswerItem, IAnswersList } from 'interfaces/props';
import { IAnswerState } from 'interfaces/states';

interface IProps extends IAnswersList, IAnswerState {}

const AnswersList = (props: IProps): JSX.Element => {
    return (
      <ul className={classes.AnswersList}>
          { props.answers.map((answer: IAnswerItem): any => {
            return (<AnswerItem
                onAnswerClick={props.onAnswerClick}
                key={answer.id}
                answer={answer}
                answerState={props.answerState ? props.answerState[answer.id] : null}
            />);
          })}
      </ul>
    );
};

export default AnswersList;