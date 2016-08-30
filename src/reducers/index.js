import {combineReducers} from 'redux';
import courses from './courseReducer';


const rootReducer = combineReducers({
    courses //using short hand property name
});

export default rootReducer;