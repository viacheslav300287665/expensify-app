import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import './styles/styles.scss';
import { addExpense } from'./actions/expenses'
import { setTextFilter } from'./actions/filters'
import getVisibileExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css' ;

const store = configureStore();

store.dispatch(addExpense({description : 'Water bill', amount : 4500}));
store.dispatch(addExpense({description : 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description : 'Rent', amount : 109500}));

//console.log(getVisibileExpenses(store.getState().expenses, store.getState().filters));
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



ReactDOM.render(jsx, document.getElementById('app'));





