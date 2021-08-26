import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer);
  //essa parte do window é pra configurar a extensão do chrome

export default store;
