import React, {Component} from 'react';
import './Answer.scss';
import { restElement } from '@babel/types';
class Answer extends Component {
    constructor(props){
        super(props);
        this.state = {input_classname: 'default'};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        const {kana_trad} = this.props;
        const {randomFunction} = this.props;
        const form_data = new FormData(e.target); 
        form_data.get("answer") === kana_trad ? randomFunction() : this.setState({input_classname: "false"});
        e.target.reset();
        e.preventDefault();
    }

    render(){
        const{kana, input_classname} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="answer" className={input_classname} value={kana}/>
            </form>
        )
    }
}

export default Answer;