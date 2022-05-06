import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import ExpenseDashboardPage from './../components/ExpenseDashboardPage'
import AddExpensePage from './../components/AddExpensePage'
import EditExpensePage from './../components/EditExpensePage'
import HelpPage from './../components/HelpPage'
import Header from './../components/Header'
import NotFoundPage from './../components/NotFoundPage'


const AppRouter = () => (
    <Router>
       <div>
       <Header/>
        <Routes>
            <Route exact={true} path="/" element={<ExpenseDashboardPage/>}/>
            <Route path="/create" element={<AddExpensePage/>}/>
            <Route path="/edit/:id" element={<EditExpensePage/>}/>
            <Route path="/help" element={<HelpPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        </div>
    </Router>
);

export default AppRouter;
