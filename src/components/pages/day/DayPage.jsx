import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classes from './DayPage.module.css';

import { dayLines } from '../../../slices/plannerSlice';


const DayPage = () => {
    useEffect(() => {
        window.location.href = '#line_19';
    }, [])
    const currentDate = useSelector((state) => state.planner.currentDate);  
    const [lines, setLines] = useState(dayLines)
    return (
        <div className={classes.day__page}>
            <h2>{new Date(currentDate).toLocaleDateString()}</h2>
            <div className={classes.content}>
                {lines.map((line, index) => 
                    <div className={classes.line} key={index} id={'line_' + (index + 1)}>
                        {line.title}
                    </div>
                )}
            </div> 
        </div>
    );
};

export default DayPage;