import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setData = (data) => {
    return {
        type: actionTypes.FETCH_FILES,
        data: data
    }
}

export const fetchFilesFailed = (error) => {
    return {
        type: actionTypes.FETCH_FILES_FAILED,
        error: error
    }
}

export const initData = () => {
    return (dispatch) => {
        axios.all([
            axios.get('data/companies.json'),
            axios.get('data/company-addresses.json'),
            axios.get('data/projects.json'),
            axios.get('data/employees.json'),
        ])
            .then(axios.spread((...responses) => {
                dispatch(setData(responses));
            }))
            .catch(error => {
                dispatch(fetchFilesFailed(error));
            })
    }
}