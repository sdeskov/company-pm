/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    employeeDetails: {},
    employeesDetails: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_EMPLOYEE_DETAILS:

            let employeeDetails = {
                employeeId: action.employeeId,
                personalDetails: {},
                projects: []
            }

            action.fetchedData.map((item) => {
                if (item.employees) {
                    // loop through the employees to get their personal data
                    item.employees.map((employee) => {
                        if (employee.id === action.employeeId) {
                            employeeDetails.personalDetails.name = employee.firstName + " " + employee.lastName
                            employeeDetails.personalDetails.dob = employee.dateOfBirth.substring(0,employee.dateOfBirth.lastIndexOf("T")); //getting rid of the time in dateOfBirth
                            employeeDetails.personalDetails.jobTitle = employee.jobTitle;
                            employeeDetails.personalDetails.jobArea = employee.jobArea;
                            employeeDetails.personalDetails.jobType = employee.jobType;

                            action.fetchedData.map((array) => {
                                if (array.companies) {
                                    // loop through the companies for that given employee to get the company name based on his companyId
                                    array.companies.map((company) => {
                                        if (employee.companyId === company.id) {
                                            employeeDetails.personalDetails.company = company.name
                                        }
                                        return company;
                                    })
                                }
                                return array;
                            })

                        }
                        return employee;
                    })
                }
                if (item.projects) {
                    // loop through the projects to get the employee IDs for a given project
                    item.projects.map((project) => {
                        if (project.employeesId) {
                            // loop through the project's employeeId array to compare each employee id with the current one
                            project.employeesId.map((employee) => {
                                if (employee === employeeDetails.employeeId) {
                                    employeeDetails.projects.push(
                                        { projectName: project.name }
                                    )
                                }
                                return employee;
                            })
                        }
                        return project;
                    })
                }

                return item;
            });

            let newEmployeesDetails = [...state.employeesDetails];
            const found = newEmployeesDetails.some(item => item.employeeId === employeeDetails.employeeId);
            if (!found) {
                newEmployeesDetails.push(employeeDetails);
            }


            return {
                ...state,
                employeeDetails: employeeDetails,
                employeesDetails: newEmployeesDetails
            };

    }
    return state;
};

export default reducer;