import { createSlice } from "@reduxjs/toolkit";

export const plannerSlice = createSlice({
    name: 'Planner',
    initialState: {
        user: {
            username: '',
            isAuth: false,
        },
        currentDate: Date.now(),
        tasks: [],
        executors: [],
    },
    reducers: {
        login: (state, payload) => {
            state.user.username = payload.payload.username;
            state.user.isAuth = true;
        },
        logout: (state) => {
            state.user.username = '';
            state.user.isAuth = false;
        },
    },
});

export const states = [
    [1, 'Новое задание'],
    [2, 'На исполнении'],
    [3, 'Исполнено']
];

export const tasksShowType = [
    [1, 'День'],
    [2, 'Неделя'],
    [3, 'Месяц'],
    [4, 'Год'],
];

export const dayLines = [
    {title: '0', isFillTask: false},
    {title: '0', isFillTask: false},
    {title: '1', isFillTask: false},
    {title: '1', isFillTask: false},
    {title: '2', isFillTask: false},
    {title: '2', isFillTask: false},
    {title: '3', isFillTask: false},
    {title: '3', isFillTask: false},
    {title: '4', isFillTask: false},
    {title: '4', isFillTask: false},
    {title: '5', isFillTask: false},
    {title: '5', isFillTask: false},
    {title: '6', isFillTask: false},
    {title: '6', isFillTask: false},
    {title: '7', isFillTask: false},
    {title: '7', isFillTask: false},
    {title: '8', isFillTask: false},
    {title: '8', isFillTask: false},
    {title: '9', isFillTask: false},
    {title: '9', isFillTask: false},
    {title: '10', isFillTask: false},
    {title: '10', isFillTask: false},
    {title: '11', isFillTask: false},
    {title: '11', isFillTask: false},
    {title: '12', isFillTask: false},
    {title: '12', isFillTask: false},
    {title: '13', isFillTask: false},
    {title: '13', isFillTask: false},
    {title: '14', isFillTask: false},
    {title: '14', isFillTask: false},
    {title: '15', isFillTask: false},
    {title: '15', isFillTask: false},
    {title: '16', isFillTask: false},
    {title: '16', isFillTask: false},
    {title: '17', isFillTask: false},
    {title: '17', isFillTask: false},
    {title: '18', isFillTask: false},
    {title: '18', isFillTask: false},
    {title: '19', isFillTask: false},
    {title: '19', isFillTask: false},
    {title: '20', isFillTask: false},
    {title: '20', isFillTask: false},
    {title: '21', isFillTask: false},
    {title: '21', isFillTask: false},
    {title: '22', isFillTask: false},
    {title: '22', isFillTask: false},
    {title: '23', isFillTask: false},
    {title: '23', isFillTask: false},
];

export const { 
    login,
    logout,
} = plannerSlice.actions;

export default plannerSlice.reducer;    