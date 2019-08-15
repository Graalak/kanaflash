import React, { Component } from 'react';
import Answer from '../../components/Answer/Answer';
import Difficulty from '../../components/Difficulty/Difficulty';
import './Hiragana.scss';
const hiraganas = require('../../assets/kana/hiragana.json');

class Hiragana extends Component {
  constructor(props){
    super(props);
    this.state = { random_hiraganas: 0, chosen_hiragana: "0"};
    this.max_number = Object.values(Object.values(hiraganas)[this.state.chosen_hiragana]).reduce((res, current) => res + Object.values(current).length, 0);
    this.randomHiragana = this.randomHiragana.bind(this);
  }

  randomHiragana() {
    let rand_key = Math.floor(Math.random() * (this.max_number));
    return this.setState({random_hiraganas: rand_key});
  }

  componentDidMount(){
    this.randomHiragana();
  }
    render() {
      const {random_hiraganas, chosen_hiragana} = this.state;
      console.log(random_hiraganas)
      console.log(Object.values(Object.values(hiraganas)[chosen_hiragana])[random_hiraganas])
      return(
          <section>
            <p className="kana">{Object.values(Object.values(hiraganas)[chosen_hiragana])[random_hiraganas]}</p>
            <Answer kana_trad={Object.keys(Object.values(hiraganas)[chosen_hiragana])[random_hiraganas]} randomFunction={this.randomHiragana}/>
          </section>
        )
    }
}

export default Hiragana;