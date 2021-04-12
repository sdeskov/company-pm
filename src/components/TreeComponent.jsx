/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import CompaniesContainer from "./../containers/CompaniesContainer";
import EmployeesContainer from "./../containers/EmployeesContainer";
// import EmployeeJobAreaContainer from "./../containers/EmployeeJobAreaContainer";

const TreeComponent = (props) => {

    useEffect(() => {
        console.log("mounted TreeComponent");
        (async function () {
            await props.fetchData();
        })();
    }, []);


    if (props.fetchError) {
        return (
            <div id="error"> There was a problem fetching the data. Quoted error message: <br/> "<i>{props.errorMessage}</i>"</div>
        )
    }

    return (
        <React.Fragment>
            <CompaniesContainer key={"companies"} />
            <EmployeesContainer key={"employees"} />
        </React.Fragment>

    )
}

export default TreeComponent
