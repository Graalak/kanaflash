import React, {Component} from 'react';
import './Answer.scss';

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
        this.setState({input_classname: 'default'});
        if(form_data.get("answer") === kana_trad || form_data.get("answer") === kana_trad.toUpperCase())
            randomFunction()
        else
            this.setState({input_classname: "false"})
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