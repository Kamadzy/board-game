import { CHANGE_BOARD_SIZE } from './boardSizeActions';
const initialState = {
    size: 5,
};
const boardSizeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BOARD_SIZE:
            return {
                ...state,
                size: action.payload,
            };

        default:
            return state;
    }
};
export default boardSizeReducer;
