import React, { useState, useEffect } from 'react';
import classes from './ItemPage.module.css';

import {
    states,
} from '../../../slices/plannerSlice';
import MySelect from '../../UI/select/MySelect';
import MyModal from '../../UI/modal/MyModal';
import MyLabel from '../../UI/label/MyLabel';
import MyInput from '../../UI/input/MyInput';
import MyTextarea from '../../UI/textarea/MyTextarea';
import MyError from '../../UI/error/MyError';
import MyTable from '../../UI/table/MyTable';
import MyToolbar from '../../UI/toolbar/MyToolbar';

const ItemPage = ({showModal, setShowModal, task, setTask}) => {
    useEffect(() => {
        if (task.id) {
            setEdit(false);
        } else {
            setEdit(true);
        }
    }, [])
    const [edit, setEdit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [files, setFiles] = useState([{id: 1, name: 'filename.docx'}]);
    const [executors, setExecutors] = useState([{id: 1, department: 'UIIS', name: 'Smakov'}]);
    const [perfomanceInfo, setPerfomanceInfo] = useState([{id: 1, department: 'UIIS', name: 'Smakov', execute_date: '2022-01-01', comment: 'comment'}])
    
    const validate = (name, value) => {
        let validationError = '';
        let isValid = true;
        switch(name) {
            case 'state':
                if (!value) {
                    validationError = 'Поле обязательно для ввода';
                    isValid = false;
                    break;
                }
                break;
        }
        setFormErrors({...formErrors, [name]: validationError});
        return {isValid, value};
    }

    const validateField = (name, value) => {
        const obj = validate(name, value);
        setTask({...task, [name]: obj.value});
    };

    const validateForm = () => {
        for (let key in task) {
            const obj = validate(key, task[key]);
            if (obj.isValid === false) {
                return false;
            }
        }
        return true;
    };
    const onEdit = () => {

    };

    const onSave = () => {

    };

    const onDelete = () => {

    };

    const buttons = [
        {title: 'Редактировать', onClick: onEdit, hidden: edit},
        {title: 'Сохранить и закрыть', onClick: onSave, hidden: !edit},
        {title: 'Удалить', onClick: onDelete, hidden: task.id ? edit : true},
        {title: 'Закрыть', onClick: () => setShowModal(false), hidden: false},
    ]; 

    return (
        <div>
            <MyModal visible={showModal} setVisible={setShowModal}>
                <MyToolbar 
                    buttons={buttons}
                />
                <form className={classes.form__edit}>
                    <h1>Задание</h1>
                    <div className={classes.tabs}>
                        <div className={classes.tabs__items}>
                            <a href='#tab_01' className={classes.tabs__item}><span>Вкладка 1</span></a>
                            <a href='#tab_02' className={classes.tabs__item}><span>Вкладка 2</span></a>
                            <a href='#tab_03' className={classes.tabs__item}><span>Вкладка 3</span></a>
                            <a href='#tab_04' className={classes.tabs__item}><span>Вкладка 4</span></a>
                        </div>
                        <div className={classes.tabs__body}>
                            <div id="tab_01" className={classes.tabs__block}>
                                <div className={classes.form__edit__row}>
                                    <div className={classes.form__edit__field}>
                                        <MyLabel htmlFor='state'>Статус</MyLabel>
                                        <MySelect 
                                            id='state' 
                                            name='state'
                                            options={states} 
                                            defaultValue="-"
                                            value={task.state}
                                            onChange={e => setTask({...task, state: e.target.value})}
                                            disabled={!edit}
                                        />
                                        <MyError error={formErrors.name}/>
                                    </div>
                                </div>
                                <div className={classes.form__edit__row}>
                                    <div className={classes.form__edit__field}>
                                        <MyLabel htmlFor='name'>Наименование</MyLabel>
                                        <MyInput 
                                            id='name' 
                                            name='name'
                                            type='text'
                                            value={task.name}
                                            onChange={e => setTask({...task, name: e.target.value})}
                                            disabled={!edit}
                                        />
                                        <MyError error={formErrors.name}/>
                                    </div>
                                </div>
                                <div className={classes.form__edit__row}>
                                    <div className={classes.form__edit__field}>
                                        <MyLabel htmlFor='description'>Краткое описание</MyLabel>
                                        <MyTextarea
                                            id='desctription' 
                                            name='description'
                                            value={task.description}
                                            onChange={e => validateField(e.target.name, e.target.value)}
                                            disabled={!edit}
                                        />
                                        <MyError error={formErrors.description}/>
                                    </div>
                                </div>
                                <div className={classes.form__edit__row}>
                                    <div className={classes.form__edit__field}>
                                        <MyLabel htmlFor='reg_date'>Дата регистрации</MyLabel>
                                        <MyInput 
                                            id='reg_date' 
                                            name='reg_date' 
                                            type='date'
                                            value={task.reg_date ? task.reg_date : ''}
                                            onChange={e => validateField(e.target.name, e.target.value)}
                                            disabled={!edit}
                                        /> 
                                        <MyError error={formErrors.reg_date}/>
                                    </div>
                                    <div className={classes.form__edit__field}>
                                        <MyLabel htmlFor='start_date'>Взято на контроль</MyLabel>
                                        <MyInput 
                                            id='start_date' 
                                            name='start_date' 
                                            type='date'
                                            value={task.start_date ? task.start_date : ''}
                                            onChange={e => validateField(e.target.name, e.target.value)}
                                            disabled={!edit}
                                        /> 
                                        <MyError error={formErrors.start_date}/>
                                    </div>
                                    <div className={classes.form__edit__field}>
                                        <MyLabel htmlFor='end_date'>Исполнить с сроку</MyLabel>
                                        <MyInput 
                                            id='end_date' 
                                            name='end_date' 
                                            type='date'
                                            value={task.end_date ? task.end_date : ''}
                                            onChange={e => validateField(e.target.name, e.target.value)}
                                            disabled={!edit}
                                        /> 
                                        <MyError error={formErrors.end_date}/>
                                    </div>
                                </div>  
                            </div>
                            <div id="tab_02" className={classes.tabs__block}>
                                <div className={classes.form__edit__tab}>
                                    <div className={classes.form__edit__row}>
                                        <MyTable 
                                            title = 'Вложенные файлы'
                                            headers={['№', 'Название']}
                                            rows={files}
                                        />
                                    </div>    
                                </div>
                            </div>
                            <div id="tab_03" className={classes.tabs__block}>
                                <div className={classes.form__edit__tab}>
                                    <div className={classes.form__edit__row}>
                                        <MyTable 
                                            title = 'Исполнители'
                                            headers={['№', 'Подразделение', 'Фамилия']}
                                            rows={executors}
                                        />
                                    </div>   
                                </div>
                            </div>
                            <div id="tab_04" className={classes.tabs__block}>
                                <div className={classes.form__edit__tab}>
                                    <div className={classes.form__edit__row}>
                                        <MyTable 
                                            title = 'Сведения об исполнении'
                                            headers={['№', 'Подразделение', 'Фамилия', 'Дата исполнения', 'Примечание']}
                                            rows={perfomanceInfo}
                                        />
                                    </div> 
                                </div>   
                            </div>
                        </div>
                    </div>
                </form>
            </MyModal>
        </div>
    );
};

export default ItemPage;