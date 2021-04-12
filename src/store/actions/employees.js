import * as actionTypes from "./actionTypes";

///// ACTION CREATORS /////

// Showing the details for a given employee
export const getEmployeeDetails = (employeeId, fetchedData) => {
    return {
        type: actionTypes.GET_EMPLOYEE_DETAILS,
        employeeId: employeeId,
        fetchedData: fetchedData
    }
}

export const showEmployeeDetails = (id, data) => {
    return (dispatch) => {
        dispatch(getEmployeeDetails(id, data))
    }
}
