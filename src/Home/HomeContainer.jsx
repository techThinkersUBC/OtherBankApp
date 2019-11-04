import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.jsx';

const HomeContainer = (props) => {
    if (!props.authenticated) return <Redirect to="/login" />;
    return (
        <Home
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

HomeContainer.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
};

HomeContainer.defautProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
