import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Credit from './Credit.jsx';

const CreditContainer = (props) => {
    if (!props.authenticated) return <Redirect to="/login" />;
    return (
        <Credit
            name={props.name}
            email={props.email}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        name: state.auth.name,
        email: state.auth.email,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    }, dispatch);
};

CreditContainer.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
};

CreditContainer.defautProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CreditContainer);
