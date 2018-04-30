import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
//import ReduxThunk from 'redux-thunk'
import thunk from 'redux-thunk';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './screens/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
   <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
      </div>
     </BrowserRouter>
   </Provider>,
document.getElementById('root'),
);
