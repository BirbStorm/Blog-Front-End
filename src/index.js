import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';

//import App from './components/App';
import PostsIndex from './containers/posts_index';
import rootReducer from './reducers';
import ReduxPromise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./index.css";

const compose = composeWithDevTools({trace:true})

const store = createStore(rootReducer, {}, compose(applyMiddleware(ReduxPromise)));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/api/posts" component={PostsIndex} />
                <Route exact path='/' component={PostsIndex}/>
            </div>
        </BrowserRouter>
   </Provider>, 
    document.getElementById("root")
);