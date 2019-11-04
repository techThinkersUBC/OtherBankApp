import React from 'react';
import PropTypes from 'prop-types';
import {
    Link,
} from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';
import { useSpring, config, animated } from 'react-spring';
import './Home.scss';

const Home = (props) => {

    const homeTopAnimation = useSpring({
        to: {
            transform: 'translate(0%, 0%)',
            opacity: 1,
        },
        from: {
            transform: 'translate(0%, 10%)',
            opacity: 0,
        },
        delay: 3000,
        config: config.default,
    });

    const homeBottomAnimation = useSpring({
        to: {
            transform: 'translate(0%, 0%)',
        },
        from: {
            transform: 'translate(0%, -30%)',
        },
        delay: 2000,
        config: config.default,
    });

    return (
        <div className="Home">
            <div className="HomeTop">
                <animated.div className="HomeCard" style={homeTopAnimation}>
                    <FaExclamationCircle className="HomeTopAlert" />
                    <div className="HomeTopTitle">Credit Monkey</div>
                    <div className="HomeTopRow">
                        <div className="HomeTopMessage">Credit Monkey recently issued you a credit score. You are now able to apply for a new Credit Card.</div>
                        <Link to="/credit"><div className="HomeTopButton">Apply For Credit Card</div></Link>
                    </div>
                </animated.div>
            </div>
            <animated.div className="HomeBottom" style={homeBottomAnimation}>
                <div className="HomeBottomTitle">Welcome, { props.name }</div>
                <div className="HomeBottomRow">
                    <div className="HomeLeft">
                        <div className="HomeCard">
                            <div className="HomeCardBalances">
                                <div className="HomeCardBalancesTitle">
                                    Your Balances
                                </div>
                                <div className="HomeCardBalance">
                                    <div>Checking: 7000$</div>
                                    <div className="HomeCardBalanceButton">View Account</div>
                                </div>
                                <div className="HomeCardBalance">
                                    <div>Savings: 8500$</div>
                                    <div className="HomeCardBalanceButton">View Account</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="HomeRight">
                        <div className="HomeCard">
                            <div className="HomeNews">
                                <div className="HomeNewsTitle">
                                    Latest News
                                </div>
                                <div className="HomeNewsList">
                                    <div className="HomeNewsItem">
                                        A recent move by the United Arab Emirates (UAE) to cut interest rates will protect the currency and support the economy amid rising external risks, the country’s top central banker told CNBC on Sunday.
                                    </div>
                                    <div className="HomeNewsItem">
                                        The Bank of England is set to keep interest rates on hold at 0.75% on Thursday, but downgrade Britain’s economic outlook as prolonged Brexit uncertainty takes its toll on growth.
                                    </div>
                                    <div className="HomeNewsItem">
                                        A recent move by the United Arab Emirates (UAE) to cut interest rates will protect the currency and support the economy amid rising external risks, the country’s top central banker told CNBC on Sunday.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
    );
};

Home.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
};

Home.defautProps = {
};

export default Home;
