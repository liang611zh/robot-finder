import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {createLogger} from 'redux-logger';
import thunkMiddlware from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import { searchRobots,requestRobots} from './reducers';

const logger=createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots});
const store=createStore(rootReducer, applyMiddleware(thunkMiddlware,logger));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
