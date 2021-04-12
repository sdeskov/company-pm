import React, { useState } from 'react';
import "./Components.css";

const EmployeesComponent = (props) => {
    const [listEmployees, setListEmployees] = useState(false);
    const [openEmployeeDetails, setOpenEmployeeDetails] = useState(false);
    const [openedId, setOpenedId] = useState(null);

    const handleListEmployees = () => {
        if (listEmployees) {
            setListEmployees(false);
        } else {
            setListEmployees(true);
        }
    }

    const handleClickEmployee = (empId, empIndex) => {
        if (openEmployeeDetails && openedId === empIndex) {
            setOpenEmployeeDetails(false);
            setOpenedId(null);
        } else {
            setOpenEmployeeDetails(true);
            setOpenedId(empIndex);
            props.showEmployeeDetails(empId, props.data);
        }
    }

    return (
        <div id="employees">
            <div className="button-container">
                <button onClick={handleListEmployees} className={listEmployees ? "active" : "inactive"}>
                    <span className={listEmployees ? "opened" : "closed"}>Employees</span>
                </button>
            </div>
            {listEmployees ? (
                <ul className="wrapper-list">
                    {props.data.map((element, index) => (
                        element.employees ? (
                            element.employees.map((employee, ind) => (
                                <li className="employee-wrapper" key={employee.id}>
                                    <span class="item-name" onClick={() => handleClickEmployee(employee.id, ind)}>{employee.firstName} {employee.lastName}</span>

                                    {openEmployeeDetails && openedId === ind ? (
                                        <ul className="employee-details-wrapper">
                                            {props.employeesDetails.map((item) => (
                                                item.employeeId === employee.id ? (
                                                    <React.Fragment key={"details:" + item.employeeId}>
                                                        <li><strong>Personal Details:</strong></li>
                                                        <ul>
                                                            <li><strong>Date of Birth:</strong> {item.personalDetails.dob}</li>
                                                            <li><strong>Company:</strong> {item.personalDetails.company}</li>
                                                            <li><strong>Job Title</strong>: {item.personalDetails.jobTitle}</li>
                                                            <li><strong>Job Type:</strong> {item.personalDetails.jobType}</li>
                                                            <li><strong>Job Area:</strong> {item.personalDetails.jobArea}</li>
                                                        </ul>
                                                        <li>
                                                            <strong>Projects: </strong>
                                                            {item.projects.length === 0 ? (
                                                                <span style={{ color: 'red' }}>The employee is not assigned to any projects!</span>
                                                            ) : (
                                                                <ul>
                                                                    {item.projects.map((pr) => (
                                                                        <li key={pr}>{pr.projectName}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                    </React.Fragment>
                                                ) : (
                                                    <React.Fragment />
                                                )
                                            ))}
                                        </ul>
                                    ) : (
                                        <React.Fragment />
                                    )}
                                </li>
                            ))
                        ) : (
                            <React.Fragment key={index} />
                        )

                    ))}
                </ul>

            ) : (
                <React.Fragment />
            )}

        </div>
    )
}

export default EmployeesComponent;
