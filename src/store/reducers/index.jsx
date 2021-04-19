import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import boardSizeReducer from './boardSizeReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    boardSize: boardSizeReducer,
});
export default rootReducer;
