import React, {Component} from 'react';
import './Answer.scss';
class Answer extends Component {
    constructor(props){
        super(props);
        const {kana_trad} = this.props;
        this.state = {kana_trad: kana_trad, input_classname: 'default'};

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        const {kana_trad} = this.state;
        const form_data = new FormData(e.target); 
        console.log(form_data.get("answer"))
        form_data.get("answer") === kana_trad ? this.setState({input_classname: "true"}) : this.setState({input_classname: "false"});
        e.preventDefault();
    }

    render(){
        const{input_classname} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="answer" className={input_classname}/>
            </form>
        )
    }
}

export default Answer;