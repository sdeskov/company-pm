import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';

import CompaniesComponent from '../components/CompaniesComponent';

export class CompaniesContainer extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <CompaniesComponent
                showCompanyDetails={this.props.onShowCompanyDetails}
                showProjectDetails={this.props.onShowProjectDetails}

                companiesDetails={this.props.companiesDetails}
                projectDetails={this.props.projectDetails}
                data={this.props.data}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.tr.fetchedData,
        companiesDetails: state.cmp.companiesDetails,
        projectDetails: state.pr.projectDetails
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onShowCompanyDetails: (id, fetchedData) => dispatch(actionCreators.showCompanyDetails(id, fetchedData)),
        onShowProjectDetails: (id, fetchedData) => dispatch(actionCreators.showProjectDetails(id, fetchedData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesContainer);
