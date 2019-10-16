import React, { Component } from 'react';
import classes from './AnswerItem.module.scss';
import { IAnswerItem } from 'interfaces/props';
import { IAnswerClick, TAnswerState } from 'interfaces';
import Utils from 'utils';

interface IProps extends IAnswerClick {
    answer: IAnswerItem;
    answerState: TAnswerState | null;
}

export default class AnswerItem extends Component {
    readonly props: Readonly<IProps>;

    constructor(props: IProps) {
        super(props);

        this.props = props;
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const cls = [classes.AnswerItem];

        if (this.props.answerState) {
            cls.push(classes[Utils.toUpperCase(this.props.answerState)]);
        }

        return (
            <li onClick={(): void => {
                if (this.props.onAnswerClick) {
                    this.props.onAnswerClick(this.props.answer.id)
                }
            }} className={cls.join(' ')}>
                { this.props.answer.text }
            </li>
        );
    }
}