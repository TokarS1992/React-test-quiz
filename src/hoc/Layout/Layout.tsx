import React, { Component } from 'react';
import Quiz from 'containers/Quiz/Quiz';
import classes from './Layout.module.scss';

export default class Layout extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={classes['Layout']}>
                <main className={classes['Layout-main']}>
                    <Quiz/>
                </main>
            </div>
        );
    }
}