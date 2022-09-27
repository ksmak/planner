import React from 'react';
import classes from './MyTextarea.module.css';

const MyTextarea = ({children, ...props}) => {
    return (
        <textarea {...props} className={classes.textarea}>
            {children}
        </textarea>
    );
};

export default MyTextarea;