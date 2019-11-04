import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setEmail, setName, setPassword, login } from "../actions/auth.js";
import { useLocation } from "react-router-dom";
import Login from './Login.jsx';

const LoginContainer = ({
    authenticated,
    setEmail,
    setPassword,
    setName,
    login,
}) => {
    if (authenticated) return <Redirect to="/" />;
    return (
        <Login
            login={login}
            setEmail={setEmail}
            setPassword={setPassword}
            setName={setName}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        authenticated: state.auth.authenticated,
        name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        login,
        setEmail,
        setPassword,
        setName,
    }, dispatch);
};

LoginContainer.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    setEmail: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
};

LoginContainer.defautProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
