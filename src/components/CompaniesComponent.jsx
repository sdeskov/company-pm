import React, { useState } from 'react';
import "./Components.css";

const CompaniesComponent = (props) => {

    const [openedId, setOpenedId] = useState(null);
    const [openCompanyDetails, setOpenCompanyDetails] = useState(false);
    const [listCompanies, setListCompanies] = useState(false);
    const [openedProjectId, setOpenedProjectId] = useState(null);
    const [openProjectDetails, setOpenProjectDetails] = useState(false);

    const handleClickCompany = (companyId, companyIndex) => {
        if (openCompanyDetails && openedId === companyIndex) {
            setOpenCompanyDetails(false);
            setOpenedId(null);
        } else {
            setOpenCompanyDetails(true);
            setOpenedId(companyIndex);
            props.showCompanyDetails(companyId, props.data);
        }
    }

    const handleClickProject = (projectId, projectIndex) => {
        if (openProjectDetails && openedProjectId === projectIndex) {
            setOpenProjectDetails(false);
            setOpenedProjectId(null);
        } else {
            setOpenProjectDetails(true);
            setOpenedProjectId(projectIndex);
            props.showProjectDetails(projectId, props.data);
        }
    }

    const handleListCompanies = () => {
        if (listCompanies) {
            setListCompanies(false);
        } else {
            setListCompanies(true);
        }
    }

    return (
        <div id="companies">
            <div className="button-container">
                <button onClick={handleListCompanies} className={listCompanies ? "active" : "inactive"}>
                    <span className={listCompanies ? "opened" : "closed"}>Companies</span>
                </button>
            </div>
            {listCompanies ? (
                <ul className="wrapper-list">
                    {props.data.map((element, index) => (
                        element.companies ? (
                            element.companies.map((company, ind) => (
                                <li className="company-wrapper" key={company.id}>
                                    <span className="item-name" onClick={() => handleClickCompany(company.id, ind)}>{company.name}</span><br />
                                    <strong>Business: </strong>{company.business}<br />
                                    <strong>Slogan: </strong>{company.slogan}

                                    {openCompanyDetails && openedId === ind ? (
                                        <ul className="company-details-wrapper">
                                            {props.companiesDetails.map((item) => (
                                                item.companyId === company.id ? (
                                                    <React.Fragment key={"details:" + item.companyId}>
                                                        <li>
                                                            <strong>Address: </strong>{item.address.street + ", " + item.address.city + ", " + item.address.state + ", " + item.address.country}
                                                        </li>
                                                        <li>
                                                            <strong>Projects: </strong>
                                                            {item.projects.length === 0 ? (
                                                                <span style={{ color: 'red' }}>The company currently has no ongoing projects!</span>
                                                            ) : (
                                                                <ul>
                                                                    {item.projects.map((project, prInd) => (
                                                                        <React.Fragment key={"project" + project.id}>
                                                                            <li className="item-name" onClick={() => handleClickProject(project.id, prInd)}><i>{project.name}</i></li>
                                                                            {openProjectDetails && openedProjectId === prInd ? (
                                                                                <ul>
                                                                                    <li><strong>Department:</strong> {project.department}</li>
                                                                                    <li><strong>Employees: </strong>
                                                                                        {project.employeesId.length === 0 ? (
                                                                                            <span style={{ color: 'red' }}>There are no employees working on this project yet!</span>
                                                                                        ) : (
                                                                                            <React.Fragment>
                                                                                            <br />
                                                                                            {project.employeesId.map((emp, i) => (
                                                                                                <span key={emp}>{emp}{project.employeesId[i + 1] ? <br /> : ''}</span>
                                                                                            ))}
                                                                                            </React.Fragment>
                                                                                        )}
                                                                                    </li>
                                                                                </ul>
                                                                            ) : (
                                                                                <React.Fragment />
                                                                            )}

                                                                        </React.Fragment>
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

export default CompaniesComponent
