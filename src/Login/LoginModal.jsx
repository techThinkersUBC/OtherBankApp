import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/bank-logo.png';

const LoginModal = (props) => (
    <div className="LoginModal">
        <div className="LoginModalInner">
            <div className="LoginModalTop">
                <img className="LoginModalImage"  alt="Other Bank Logo" src={logo} />
                <div className="LoginModalTopTitle">UK Bank</div>
            </div>
            <div className="LoginModalTitle">Login with your UK Bank account.</div>
            <div className="LoginModalList">
                <input className="LoginModalListInput" placeholder="Your Name" onBlur={(e) => props.setName(e.target.value)} />
                <input type="email" className="LoginModalListInput" placeholder="Email" onBlur={(e) => props.setEmail(e.target.value)} />
                <input type="password" className="LoginModalListInput" placeholder="Password" onBlur={(e) => props.setPassword(e.target.value)} />
            </div>
            <button className="LoginModalButton" onClick={props.login}>Login</button>
        </div>
    </div>
);

LoginModal.propTypes = {
    login: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
};

LoginModal.defautProps = {
};

export default LoginModal;
