import {combineReducers, createStore} from 'redux';
import initialState from "./initialState";
import listsReducer from './listsRedux'
import cardsReducer from './cardsRedux'
import columnsReducer from './columnsRedux'
import searchStringsReducer from './searchStringsRedux'

const subReducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringsReducer
}

const reducer = combineReducers(subReducers);

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;