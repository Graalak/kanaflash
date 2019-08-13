import React, { Component } from "react";
import {Link} from 'react-router-dom';

import './Header.scss';

class Header extends Component {
    render(){
        return (
            <header className="header">
                <Link to="/">Home</Link>
            </header>
        )
    }
}

export default Header;