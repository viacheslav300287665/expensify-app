import React from 'react';
//import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.removeExpense({id : this.props.expense.id});
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <ExpenseForm 
                expense={this.props.expense} onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        )
    };
}



const mapStateToProps = (state, props) => {
    const params = {id: window.location.pathname.split("/")[2]}
    return {
        expense: state.expenses.find((expense) => expense.id === params.id)
    };
};

const mapDispatchToProps = (dispatch, props) =>  ({
    editExpense : (id, expense) =>dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);