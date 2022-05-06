import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";
import moment from 'moment';


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : moment(0)
    });
});

test('should generate sort by amount filter', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type : 'SORT_AMOUNT',
    });
});

test('should generate sort by DATE filter', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type : 'SORT_DATE',
    });
});


test('should generate text filter with empty values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type : 'SET_TEXT',
        text : ''
    })
});

test('should generate text filter with some values', () => {
    const action = setTextFilter('123');
    expect(action).toEqual({
        type : 'SET_TEXT',
        text : '123'
    })
});
