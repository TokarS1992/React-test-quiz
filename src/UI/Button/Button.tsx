import React, { FunctionComponent } from 'react';
import Utils from 'utils';
import { IButton } from './IButton';

import classes from './Button.module.scss';

const Button: FunctionComponent<IButton> = (props) => {
    const cls = [
        classes.Button,
        classes[(props.type && Utils.toUpperCase(props.type)) || 'Primary']
    ];

    return (
        <button
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            { props.children }
        </button>
    );
};

export default Button;