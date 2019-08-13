import React from 'react';
import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Components and pages import part
import Home from "./pages/Home/Home";
import Hiragana from './pages/Hiragana/Hiragana';
import Katakana from './pages/Katakana/Katakana';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/katakana" component={Katakana}/>
      <Route path="/hiragana" component={Hiragana}/>
    </Router>
  );
}

export default App;
