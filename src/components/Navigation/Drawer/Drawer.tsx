import React, { Component } from 'react';
import classes from './Drawer.module.scss';
import Backdrop from 'UI/Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';
import { IDrawer } from 'interfaces/props';

interface ILink {
    to: string;
    label: string;
    exact: boolean;
}

const links: ILink[] = [{
    to: '/',
    label: 'Список',
    exact: true
}, {
    to: '/quiz-creator',
    label: 'Создать тест',
    exact: false
}, {
    to: '/auth',
    label: 'Авторизация',
    exact: false
}];

export default class Drawer extends Component {
    readonly props: Readonly<IDrawer>;

    constructor(props: IDrawer) {
        super(props);

        this.props = props;
    }

    clickNavHandler(): void {
        this.props.onClose && this.props.onClose();
    }

    renderLinks(): JSX.Element[] {
        return links.map((link: ILink, index: number): JSX.Element => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.Active}
                        onClick={() => this.clickNavHandler()}
                    >
                        { link.label }
                    </NavLink>
                </li>
            );
        });
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const cls = [classes.Drawer];

        if (!this.props.isOpen) {
            cls.push(classes.Close);
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        { this.renderLinks() }
                    </ul>
                </nav>

                { this.props.isOpen && <Backdrop
                    onClick={this.props.onClose}
                /> }
            </React.Fragment>
        );
    }
}