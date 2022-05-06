import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id : '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    });
});

test('shoud setup edit expense aciton object',  () => {
    const action = editExpense('123abc', {description : '123', amount : 123});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates : {
            description : '123',
            amount : 123
        }
    });
});

test('should setup add expense aciton object with provided values', () => {
    const expenseData = {
        description : 'Rent',
        amount: 109500, 
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });

});

test('should setup add expense action object with default values', () => {
    const defaultData = {
        description : '',
        amount : 0,
        createdAt : 0,
        note : ''
    };
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...defaultData,
            id : expect.any(String)
        }
    });
});