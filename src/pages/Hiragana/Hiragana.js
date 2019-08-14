import React, {
    Component
} from 'react';
import './Hiragana.scss';
const hiraganas = require('../../assets/kana/hiragana.json');

class Hiragana extends Component {
  constructor(props){
    super(props);
    this.randomHiragana = this.randomHiragana.bind(this);
    this.state = { randomHiraganas: null}
  }
  
  randomHiragana() {
    const max_number = Math.ceil(Object.keys(hiraganas).length);
    console.log(max_number);
    const rand_key = Math.floor(Math.random() * (max_number));
    return this.setState({randomHiraganas: rand_key});

  }

    render() {
      const {randomHiraganas} = this.state;
      console.log(randomHiraganas)
      return(
          <section>
            <p className="kana">{Object.values(hiraganas)[randomHiraganas]}</p>
            <button onClick={this.randomHiragana}>Refresh</button>
          </section>
        )
    }
}

export default Hiragana;