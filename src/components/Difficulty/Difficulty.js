import React, {
    Component
} from 'react';

class Difficulty extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    handleChange(event){
        this.setState({ checked: event.target.checked })
    }

    handleSubmit(event){
        
    }
    render() {
        const chosen_hiragana = [6];
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {Object.keys(chosen_hiragana).map( res => {
                        return ([
                            <label for={res}>
                                <input type="checkbox" name={res} onChange={this.handleChange}/> {res}
                            </label>
                        ]
                        )                  
                    })}
                </form>
            </div>
        );
    }
}

export default Difficulty;