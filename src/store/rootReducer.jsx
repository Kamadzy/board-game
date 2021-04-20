import { combineReducers } from 'redux';
import dataReducer from './data/dataReducer';
import boardSizeReducer from './board/boardSizeReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    boardSize: boardSizeReducer,
});
export default rootReducer;
