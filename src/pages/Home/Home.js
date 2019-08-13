import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render(){
        return (
            <div>
                <button><Link to = "/katakana"> Katakana </Link></button>
                <button><Link to = "/hiragana"> Hiragana </Link></button>           
            </div>
        );
    }
}

export default Home;