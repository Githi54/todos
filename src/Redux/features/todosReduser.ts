import { Todo } from '../../types/Todo';

type AddAction = { type: 'todos/ADD', payload: Todo };
type RemoveAction = { type: 'todos/REMOVE', payload: number };
type ClearAction = { type: 'todos/CLEAR' };

export type Action = AddAction | RemoveAction | ClearAction;

const add = (todo: Todo): AddAction => ({ type: 'todos/ADD', payload: todo });
const remove = (todoId: number): RemoveAction => ({ type: 'todos/REMOVE', payload: todoId });
const clear = (): ClearAction => ({ type: 'todos/CLEAR' });

export const actions = { add, remove, clear };

const todosReducer = (todos: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
  case 'todos/ADD':
    return [...todos, action.payload];
  case 'todos/REMOVE':
    return todos.filter(todo => todo.id !== action.payload);
  case 'todos/CLEAR':
    return [...todos];
  default:
    return todos;
  }
};

export default todosReducer;
