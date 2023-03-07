 import {createStore} from 'redux'

import CounterReducer from '../reducer/reducer';
 
 const store = createStore(CounterReducer);
   

 
 export default store