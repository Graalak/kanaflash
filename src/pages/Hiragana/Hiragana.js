import React, {
    Component
} from 'react';
import './Hiragana.scss';
import Answer from '../../components/Answer/Answer';
const hiraganas = require('../../assets/kana/hiragana.json');

class Hiragana extends Component {
  constructor(props){
    super(props);
    this.randomHiragana = this.randomHiragana.bind(this);
    this.max_number = Math.ceil(Object.keys(hiraganas).length);
    let rand_key = Math.floor(Math.random() * (this.max_number));
    this.state = { randomHiraganas: rand_key};
  }
  
  randomHiragana() {
    let rand_key = Math.floor(Math.random() * (this.max_number));
    return this.setState({randomHiraganas: rand_key});
  }

    render() {
      const {randomHiraganas} = this.state;
      return(
          <section>
            <p className="kana">{Object.values(hiraganas)[randomHiraganas]}</p>
            <Answer kana_trad={Object.keys(hiraganas)[randomHiraganas]}/>
            <button onClick={this.randomHiragana}>Refresh</button>
          </section>
        )
    }
}

export default Hiragana;