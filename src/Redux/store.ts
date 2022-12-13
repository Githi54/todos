import { Action, combineReducers, legacy_createStore as createStore } from 'redux';
import { Todo } from '../types/Todo';
import todosReducer from './features/todosReduser';

type State = {
  todos: Todo[];
};

const reducer = combineReducers<State, Action>({
  todos: todosReducer,
});

export const store = createStore(reducer);
