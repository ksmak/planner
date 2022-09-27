import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import classes from './MainPage.module.css';

import {
    tasksShowType,
    states,
} from '../../../slices/plannerSlice';
import MyToolbar from '../../UI/toolbar/MyToolbar';
import MySelect from '../../UI/select/MySelect';

import DayPage from '../day/DayPage';
import WeekPage from '../week/WeekPage';
import MonthPage from '../month/MonthPage';
import YearPage from '../year/YearPage';
import ItemPage from '../item/ItemPage';

const MainPage = () => {
    const user = useSelector((state) => state.planner.user);
    const navigate = useNavigate();
    const [taskShowType, setTaskShowType] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [task, setTask] = useState({
        state: 1,
        name: '',
        description: '',
        reg_date: null,
        start_date: null,
        end_date: null,
        create_date: null,
        create_author: null,
        change_date: null,
        change_author: null,
        files: [{id: 1, name: 'filename.docx', file: 'object'}],
        executors: [{id: 1, order: 1, department: 'UIIS', name: 'Smakov'}],
        perfomanceInfo: [],
    }
)
    
    if (!user.isAuth) {
        return <Navigate to="/login" />
    };

    const buttons = [
        {title: 'Добавить задание', onClick: () => {window.location.href = '#tab_01'; setShowModal(true)}},
    ];


    
    return (
        <div className={classes.main__page}>
            <ItemPage 
                showModal = {showModal}
                setShowModal = {setShowModal}
                task = {task}
                setTask = {setTask}
            />
            <div className={classes.main__menu}>
                <nav>
                    <h2>Меню</h2>
                    <ul>
                        <li>Сегодня</li>
                        <li>Календарь</li>
                    </ul>
                </nav>
           </div> 
           <div className={classes.main__content}>
                <header>
                    <h1>Планировщик заданий</h1> 
                    <MyToolbar 
                        buttons={buttons}
                    />
                    <MySelect 
                        id='tasks_show_type' 
                        name='tasks_show_type'
                        options={tasksShowType} 
                        defaultValue="-"
                        value={taskShowType}
                        onChange={e => setTaskShowType(e.target.value)}
                        firstOptionDisabled={true}
                    />
                </header>
                <main>
                    {taskShowType == 1 ?
                        <DayPage />
                    : taskShowType == 2 ?
                        <WeekPage />
                    : taskShowType == 3 ?
                        <MonthPage />
                    : taskShowType == 4 ?
                        <YearPage />        
                    : <div>Error</div>    
                    }
                </main>
           </div>

            
        </div>
    );
};

export default MainPage;