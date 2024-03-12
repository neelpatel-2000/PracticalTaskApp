import {combineReducers} from 'redux';
import favoriteAction from '../Action/favoriteAction';

const rootReducer = combineReducers({
  favorite: favoriteAction,
});

export default rootReducer;
