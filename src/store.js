import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
let username=[];
let store = createStore(rootReducer,username,compose(applyMiddleware(thunk)));
export default store;
