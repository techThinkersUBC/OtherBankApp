import React from 'react';
import logo from './assets/bank-logo.png';

const Header = () => (
    <div className="AppHeader">
        <div className="AppHeaderLeft">
            <img className="AppHeaderLogo" src={logo} />
            <div className="AppHeaderTitle">UK Bank</div>
        </div>
        <div className="AppHeaderDescription">Powered by HSBC Open Banking</div>
    </div>
);

export default Header;
