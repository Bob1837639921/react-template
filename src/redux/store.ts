import { createStore, applyMiddleware } from "redux";
import reducers from './reducers'
// 引入thunk，支持异步action
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))