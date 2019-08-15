import React, { Component } from 'react';
import Answer from '../../components/Answer/Answer';
import Difficulty from '../../components/Difficulty/Difficulty';
import './Kana.scss';
const hiraganas = require('../../assets/kana/hiragana.json');
const katakanas = require('../../assets/kana/katakana.json');

class Kana extends Component {
  constructor(props){
    super(props);
    this.state = { random_kana: 0, chosen_difficulty: "0"};
    this.max_number = Object.values(Object.values(hiraganas)[this.state.chosen_difficulty]).reduce((res, current) => res + Object.values(current).length, 0);
    this.randomKana = this.randomKana.bind(this);
  }

  randomKana() {
    let rand_key = Math.floor(Math.random() * (this.max_number));
    return this.setState({random_kana: rand_key});
  }

  componentDidMount(){
    this.randomKana();
  }
    render() {
      const {path} = this.props.match;
      const {random_kana, chosen_difficulty} = this.state;
      let kana;
      path === '/hiragana' ? kana = hiraganas : kana = katakanas;        
      return(
          <section>
            <p className="kana">{Object.values(Object.values(kana)[chosen_difficulty])[random_kana]}</p>
            <Answer kana_trad={Object.keys(Object.values(kana)[chosen_difficulty])[random_kana]} randomFunction={this.randomKana}/>
          </section>
        )
    }
}

export default Kana;