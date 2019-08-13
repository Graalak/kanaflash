import React, {
    Component
} from 'react';
import { directive } from '@babel/types';
const hiraganas = require('../../assets/kana/hiragana.json');

class Hiragana extends Component {
  constructor(props){
    super(props);
    this.randomHiragana = this.randomHiragana.bind(this);
    this.state = { randomHiraganas: 0}
  }
  
  randomHiragana(object) {
    const max_number = Math.ceil(Object.keys(object).length);
    const rand_key = Math.floor(Math.random() * (max_number));
    return this.setState({randomHiraganas: rand_key});

  }

    render() {
      const {randomHiraganas} = this.state;
      return(
          <section>
            {Object.values(hiraganas)[randomHiraganas]}
            <button onClick={this.randomHiragana}>Refresh</button>
          </section>
        )
    }
}

export default Hiragana;