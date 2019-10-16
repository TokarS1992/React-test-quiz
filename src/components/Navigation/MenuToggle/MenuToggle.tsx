import React, { FunctionComponent } from 'react';
import classes from './MenuToggle.module.scss';

interface IProps {
    isOpen?: boolean;

    onToggle?(): void;
}

const MenuToggle: FunctionComponent<IProps> = (props): JSX.Element => {
    const cls = [
        classes.MenuToggle,
        'fa'
    ];

    if (props.isOpen) {
        Array.prototype.push.apply(cls, [
            'fa-times',
            classes.Open
        ])
    } else {
        cls.push('fa-bars');
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    );
};

export default MenuToggle;