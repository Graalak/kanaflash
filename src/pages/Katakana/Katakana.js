import React, {
    Component
} from 'react';
import './Katakana.scss';
import Answer from '../../components/Answer/Answer';
const katakanas = require('../../assets/kana/katakana.json');

class Katakana extends Component {
    constructor(props){
        super(props);
        this.randomKatakana = this.randomKatakana.bind(this);
        this.max_number = Math.ceil(Object.keys(katakanas).length);
        let rand_key = Math.floor(Math.random() * (this.max_number));
        this.state = { randomKatakanas: rand_key};
    }

    randomKatakana() {
    let rand_key = Math.floor(Math.random() * (this.max_number));
    return this.setState({randomKatakanas: rand_key});
    }

    render() {
        const {randomKatakanas} = this.state;
        return(
            <section>
                <p className="kana">{Object.values(katakanas)[randomKatakanas]}</p>
                <Answer kana_trad={Object.keys(katakanas)[randomKatakanas]} randomFunction={this.randomKatakana}/>
            </section>
        )
    }
}

export default Katakana;