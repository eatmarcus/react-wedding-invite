import React from 'react';
import ReactDOM from 'react-dom';
import './assets/Cormorant_Garamond/CormorantGaramond-Bold.ttf';
import './assets/Cormorant_Garamond/CormorantGaramond-BoldItalic.ttf';
import './assets/Cormorant_Garamond/CormorantGaramond-Regular.ttf';
import './assets/Arapey/Arapey-Regular.ttf';
import './assets/hello/Hello.ttf';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
