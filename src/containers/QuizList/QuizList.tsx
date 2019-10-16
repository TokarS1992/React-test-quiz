import React, { Component } from 'react';
import classes from './QuizList.module.scss';
import { NavLink } from 'react-router-dom';

export class QuizList extends Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz: any, index: number) => {
            return (
                <li key={index}>
                    <NavLink to={`/quiz/${quiz}`}>
                        Test {quiz}
                    </NavLink>
                </li>
            );
        });
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={classes.QuizList}>
                <div>
                    <h1>Список текстов</h1>

                    <ul>
                        { this.renderQuizes() }
                    </ul>
                </div>
            </div>
        );
    }
}