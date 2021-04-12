/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    companyDetails: {},
    companiesDetails: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_COMPANY_DETAILS:

            let companyDetails = {
                companyId: action.companyId,
                address: {},
                projects: []
            };

            action.fetchedData.map((item, index) => {
                if (item.companyAddresses) {
                    item.companyAddresses.map((address) => {
                        if (address.companyId === action.companyId) {
                            companyDetails.address.city = address.city;
                            companyDetails.address.country = address.country;
                            companyDetails.address.street = address.street;
                            companyDetails.address.state = address.state;
                        }
                        return address;
                    })
                }
                if (item.projects) {
                    item.projects.map((project) => {
                        if (project.companyId === action.companyId) {
                            companyDetails.projects.push(
                                {
                                    id: project.id,
                                    name: project.name,
                                    department: project.department,
                                    employeesId: project.employeesId
                                }
                            )
                        }
                        return project;
                    })
                }
                return item;
            })




            let newCompaniesDetails = [...state.companiesDetails];
            const found = newCompaniesDetails.some(item => item.companyId === companyDetails.companyId);
            if (!found) {
                newCompaniesDetails.push(companyDetails)
            }

            return {
                ...state,
                companyDetails: companyDetails,
                companiesDetails: newCompaniesDetails

            };

        case actionTypes.GET_PROJECT_DETAILS:

            return state;
    }
    return state;
};

export default reducer;