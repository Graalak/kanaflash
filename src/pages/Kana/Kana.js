import React, { Component } from 'react';
import Answer from '../../components/Answer/Answer';
import Difficulty from '../../components/Difficulty/Difficulty';
import './Kana.scss';
const hiraganas = require('../../assets/kana/hiragana.json');
const katakanas = require('../../assets/kana/katakana.json');

class Kana extends Component {
  constructor(props){
    super(props);

    const {path} = props.match;
    
    this.kanas =  path === '/hiragana' ? hiraganas : katakanas;

    const random_kana= 0;
    const chosen_difficulty= [1];
    const difficulty = this.kanas[1];
    const selected_kanas = Object.keys(difficulty).map(k => ({kana: difficulty[k], answer: k}));
    const max_number = selected_kanas.length;

    this.state = { 
      random_kana,
      chosen_difficulty,
      max_number,
      selected_kanas,
    };

    this.randomKana = this.randomKana.bind(this);
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }

  randomKana(max_number) {
    if(!max_number)
      max_number = this.state.max_number;

    let rand_key = Math.floor(Math.random() * (max_number));
    return this.setState({random_kana: rand_key});
  }

  async changeDifficulty(new_difficulty){
    try{
      let {chosen_difficulty} = this.state;

      if(chosen_difficulty.includes(+new_difficulty))
        chosen_difficulty = chosen_difficulty.filter(c => +c !== +new_difficulty)
      else
        chosen_difficulty.push(+new_difficulty)

      const selected_kanas = chosen_difficulty.reduce((result, current) => {
        const difficulty = this.kanas[current];
        return [...result, ...Object.keys(difficulty).map(k => ({kana: difficulty[k], answer: k}))]
      },[])
      const max_number = selected_kanas.length;

      this.setState({chosen_difficulty, max_number, selected_kanas})
      this.randomKana(max_number);
    }catch(e){
      console.error(e.message);
    }
  }

  componentDidMount(){
    this.randomKana();
  }
    render() {
      const {random_kana, chosen_difficulty,selected_kanas} = this.state;
      
      const empty = selected_kanas.length <= 0

      return(
          <section>
            {!empty && <p className="kana">{selected_kanas[random_kana].kana}</p>}
            {!empty && <Answer kana_trad={selected_kanas[random_kana].answer} randomKana={this.randomKana}/>}
            <Difficulty changeDifficulty={this.changeDifficulty} chosen_difficulty={chosen_difficulty}/>
          </section>
        )
    }
}

export default Kana;