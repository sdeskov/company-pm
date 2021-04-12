import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';

import EmployeesComponent from '../components/EmployeesComponent';

export class EmployeesContainer extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <EmployeesComponent
                showEmployeeDetails={this.props.onShowEmployeeDetails}

                employeesDetails={this.props.employeesDetails}
                data={this.props.data}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.tr.fetchedData,
        employeesDetails: state.emp.employeesDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onShowEmployeeDetails: (id, fetchedData) => dispatch(actionCreators.showEmployeeDetails(id, fetchedData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
