import React from 'react';
import './App.css';
import  {Route, Switch} from 'react-router-dom';
// Components and pages import part
import Home from "./pages/Home/Home";
import Kana from './pages/Kana/Kana';
import Header from './components/Header/Header';

function App() {
  return (
    [
      <Header/>,
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/katakana" component={Kana}/>
        <Route path="/hiragana" component={Kana}/>
      </Switch>
    ]
  );
}

export default App;
