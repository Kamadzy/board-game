import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const fetchData = () => (dispatch) => {
    axios.get('http://demo1030918.mockable.io/').then((res) => {
        dispatch({
            type: FETCH_DATA,
            payload: res.data,
        });
    });
};
