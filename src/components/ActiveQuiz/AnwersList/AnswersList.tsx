import React from 'react';
import classes from './AnswersList.module.scss';
import { IAnswerItem, IAnswersList } from 'interfaces/props';

const AnswersList = (props: IAnswersList): JSX.Element => {
    return (
      <ul className={classes.AnswersList}>
          { props.answers.map((answer: IAnswerItem): any => {
            return answer;
          })}
      </ul>
    );
};

export default AnswersList;