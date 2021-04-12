import * as actionTypes from "../actions/actionTypes";

const initialState = {
    fetchedData: [],
    error: false,
    errorMessage: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.FETCH_FILES:
            let fetchedData = [
                {
                    companies: []
                },
                {
                    companyAddresses: []
                },
                {
                    projects: []
                },
                {
                    employees: []
                }
            ];

            action.data.map((item, index) => {
                fetchedData.forEach((obj, i) => {
                    if (index === i) {
                        for (const key in obj) {
                            obj[key] = item.data
                        }
                    }
                })
                return item;
            })

            return {
                ...state,
                error: false,
                errorMessage: '',
                fetchedData: fetchedData
            }

        case actionTypes.FETCH_FILES_FAILED:
            console.log(action.error);
            return {
                ...state,
                error: true,
                errorMessage: action.error.toString()
            }
        default:
            return state;
    }

}

export default reducer;