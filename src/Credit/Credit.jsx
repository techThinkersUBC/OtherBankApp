import React from 'react';
import PropTypes from 'prop-types';
import {
    Link,
} from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';
import { useSpring, config, animated } from 'react-spring';
import './Credit.scss';

const Credit = (props) => {

    return (
        <div className="Credit">
            <div className="CreditTop">
                <div className="CreditTopTitle">Your Credit Score from <div className="CreditTopTitleApp">Credit Monkey</div></div>
                <div className="CreditTopScore">800</div>
                <div className="CreditTopSubtitle">Excellent</div>
            </div>
            <div className="CreditBottom">
                <div className="CreditBottomTitle">Congratulations!</div>
                <div className="CreditBottomSubtitle">You qualify for a UK Bank Credit Card, press the button below to automatically request your card.</div>
                <div className="CreditBottomButton">Apply</div>
            </div>
        </div>
    );
};

Credit.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
};

Credit.defautProps = {
};

export default Credit;
