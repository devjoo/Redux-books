import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books : BooksReducer
});

export default rootReducer;


/*
* 1. combineReducers : 스테이트를 맵핑한다
* */