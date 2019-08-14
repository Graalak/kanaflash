import React from 'react';
import './App.css';
import  {Route, Switch} from 'react-router-dom';
// Components and pages import part
import Home from "./pages/Home/Home";
import Hiragana from './pages/Hiragana/Hiragana';
import Katakana from './pages/Katakana/Katakana';
import Header from './components/Header/Header';

function App() {
  return (
    [
      <Header/>,
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/katakana" component={Katakana}/>
        <Route path="/hiragana" component={Hiragana}/>
      </Switch>
    ]
  );
}

export default App;
