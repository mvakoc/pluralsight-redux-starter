import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" acctiveClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/courses" acctiveClassName="active">Courses</Link>
            {" | "}
            <Link to="/about" acctiveClassName="active">About</Link>
        </nav>
    );
};

export default Header;