import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "materialize-css/dist/css/materialize.min.css"
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import Reducer from './reducers/index';


import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "jquery/dist/jquery.min.js"
import "jquery/dist/jquery.slim.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
// import 'bootstrap/js/affix.js';


import "jquery.easing/jquery.easing"
// import "wow"
import "wow.js/dist/wow"
import "jquery-sticky/jquery.sticky.js"
import "superfish/dist/js/superfish.min.js"
import "hoverintent"
import "isotope-layout/dist/isotope.pkgd.min.js"
import "owl.carousel/dist/owl.carousel.min.js"
import "venobox/venobox/venobox.min.js"
import "morphext/dist/morphext.min.js"
import "animate.css/animate.min.css"
import "font-awesome/css/font-awesome.min.css"
// import "venobox"
import "./assets/js/main.js";
import "./assets/css/style.css"
import "./assets/js/main.js"

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,reduxThunk)(createStore);


ReactDOM.render(


    <Provider store={createStoreWithMiddleware(Reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>



    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>

  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
