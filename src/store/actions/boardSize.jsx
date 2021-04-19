export const CHANGE_BOARD_SIZE = 'CHANGE_BOARD_SIZE';
const changeBoardSize = (value) => (dispatch) => {
    dispatch({
        type: CHANGE_BOARD_SIZE,
        payload: value,
    });
};
export default changeBoardSize;
