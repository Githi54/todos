import { Todo } from "../../types/Todo";

type AddAction = { type: 'todos/ADD', payload: string };
type RemoveAction = { type: 'todos/REMOVE', payload: string };
type ClearAction = { type: 'todos/CLEAR' };

type Action = AddAction | RemoveAction | ClearAction;

const add = (good: string): AddAction => ({ type: 'todos/ADD', payload: good });
const remove = (good: string): RemoveAction => ({ type: 'todos/REMOVE', payload: good });
const clear = (good: string): ClearAction => ({ type: 'todos/CLEAR' });

export const actions = { add, remove, clear }


const todosReducer = (todos: Todo[] = [], action: Action) => {
  switch (action.type) {
    case 'todos/ADD':
      return [...todos, action.payload];
    case 'todos/REMOVE':
      return todos.filter(todo => todo.title !== action.payload);
    case 'todos/CLEAR':
      return [...todos];
    default:
      return todos;
  }
};

export default todosReducer;
