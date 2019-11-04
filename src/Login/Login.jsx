import React from 'react';
import PropTypes from 'prop-types';
import LoginModal from './LoginModal.jsx';
import './Login.scss';

const Login = (props) => {
    return (
        <div className="Login">
            <LoginModal
                login={props.login}
                setName={props.setName}
                setEmail={props.setEmail}
                setPassword={props.setPassword}
            />
        </div>
    );
};

Login.propTypes = {
    setEmail: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
};

Login.defautProps = {
};

export default Login;
