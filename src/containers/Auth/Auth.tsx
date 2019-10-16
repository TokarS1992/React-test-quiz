import React, { Component } from 'react';
import classes from './Auth.module.scss';

import Button from 'UI/Button/Button';

export class Auth extends Component {
    loginHandler(): void {

    };

    registerHandler(): void {

    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Quiz auth page</h1>

                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className={classes.AuthForm}
                    >
                        <input type="text"/>
                        <input type="text"/>

                        <Button
                            type='success'
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>

                        <Button
                            type='primary'
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}