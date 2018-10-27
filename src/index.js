import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';

const title = 'My Website Is Working';

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept();