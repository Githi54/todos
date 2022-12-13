import { combineReducers, legacy_createStore as createStore } from 'redux';
import todosReducer from './features/todosReduser';

const reducer = combineReducers({
  todos: todosReducer,
});

export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>
