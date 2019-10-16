import React, { Component } from 'react';
import classes from './Layout.module.scss';
import MenuToggle from 'components/Navigation/MenuToggle/MenuToggle';
import Drawer from 'components/Navigation/Drawer/Drawer';
import { ILayout } from 'interfaces/states';

export default class Layout extends Component {
    readonly state: Readonly<ILayout> = {
        menu: false
    };

    toggleMenuHandler(): void {
        this.setState({
            menu: !this.state.menu
        });
    };

    menuOnCloseHandler(): void {
        this.setState({
            menu: false
        });
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.menuOnCloseHandler.bind(this)}
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler.bind(this)}
                    isOpen={this.state.menu}
                />

                <main className={classes['Layout-main']}>
                    { this.props.children }
                </main>
            </div>
        );
    }
}