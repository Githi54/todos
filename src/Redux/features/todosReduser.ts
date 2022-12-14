import { Todo } from '../../types/Todo';

type AddAction = { type: 'todos/ADD', payload: Todo };
type RemoveAction = { type: 'todos/REMOVE', payload: number };
type RenameAction = { type: 'todos/RENAME', payload: {id: number, newTitle: string}};
type ClearAction = { type: 'todos/CLEAR' };

export type Action = AddAction | RemoveAction | RenameAction | ClearAction;

const add = (todo: Todo): AddAction => ({ type: 'todos/ADD', payload: todo });
const remove = (todoId: number): RemoveAction => ({ type: 'todos/REMOVE', payload: todoId });
const rename = (id: number, newTitle: string): RenameAction => ({ type: 'todos/RENAME', payload: { id, newTitle } });
const clear = (): ClearAction => ({ type: 'todos/CLEAR' });

export const actions = { add, remove, clear, rename };

const todosReducer = (todos: Todo[] = [], action: Action): Todo[] => {
  switch (action.type) {
  case 'todos/ADD':
    return [...todos, action.payload];
  case 'todos/REMOVE':
    return todos.filter(todo => todo.id !== action.payload);
  case 'todos/RENAME':
    return todos.map(todo => {
      if (todo.id === action.payload.id) {
        todo.title = action.payload.newTitle;
      }

      return todo;
    });
  case 'todos/CLEAR':
    return [];
  default:
    return todos;
  }
};

export default todosReducer;
