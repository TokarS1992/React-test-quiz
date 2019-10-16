import React, { FunctionComponent } from 'react';
import classes from './Backdrop.module.scss';
import { IBackdrop } from './IBackdrop';

const Backdrop: FunctionComponent<IBackdrop> = (props): JSX.Element => {
    return (
        <div
            className={classes.Backdrop}
            onClick={props.onClick}
        />
    );
};

export default Backdrop;