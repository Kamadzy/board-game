import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const fetchData = () => (dispatch) => {
    axios.get(process.env.REACT_APP_DEMO_ENDPOINT).then((res) => {
        dispatch({
            type: FETCH_DATA,
            payload: res.data,
        });
    });
};
