import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index'
import TreeComponent from "../components/TreeComponent";

export class TreeContainer extends Component {
    render() {
        return (
            <TreeComponent
                fetchData={this.props.onFetchData}
                fetchError={this.props.error}
                errorMessage={this.props.errorMessage}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        jsonData: state.tr.fetchedData,
        error: state.tr.error,
        errorMessage: state.tr.errorMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: () => dispatch(actionCreators.initData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TreeContainer);
