import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import  { BrowserRouter as Router} from 'react-router-dom';
import history from './services/history'

ReactDOM.render(
    <Router history={history}>
        <App /> 
    </Router>, document.getElementById('root'));
const config = {
    apiKey: "AIzaSyA_9Jp98wwTpT3j_7a_1Kr2sgRE3NWDDaM",
    authDomain: "kanaflash-adcb1.firebaseapp.com",
    databaseURL: "https://kanaflash-adcb1.firebaseio.com",
    projectId: "kanaflash-adcb1",
    storageBucket: "kanaflash-adcb1.appspot.com",
    messagingSenderId: "1041831295777",
    appId: "1:1041831295777:web:fa470310a351eb82"
};
firebase.initializeApp(config);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
