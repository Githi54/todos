import { MDBListGroup, MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../Redux/features/todosReduser';
import { Todo } from '../../types/Todo';
import { DeleteButton } from '../DeleteButton';
import { EditButton } from '../EditButton';
import { EditForm } from '../EditForm';
import { TodoItem } from '../TodoItem';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  const [newTitle, setNewTitle] = useState('');
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const dispatch = useDispatch();

  const handleEdit = useCallback((title: string, id: number) => {
    setEditTodoId(id);
    setNewTitle(title);
  }, []);

  const handleDelete = useCallback((id: number) => {
    dispatch(actions.remove(id));
  }, [todos]);

  return (
    <>
      {todos.map((todo) => (
        <MDBListGroup horizontal className="rounded-0 bg-transparent" key={todo.id}>
          <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent" key={todo.id}>
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckChecked"
              defaultChecked={todo.completed}
            />
          </MDBListGroupItem>
          <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
            {editTodoId === todo.id
              ? (
                <EditForm 
                  todo={todo} 
                  newTitle={newTitle}
                  setEditTodoId={setEditTodoId}
                  handleDelete={handleDelete}
                  setNewTitle={setNewTitle}
                />
              )
              : (
                <TodoItem todo={todo} />
              )
            }
          </MDBListGroupItem>
          <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
            <div className="d-flex flex-row justify-content-end mb-1">
              <EditButton 
                todo={todo}
                editTodoId={editTodoId}
                handleEdit={handleEdit}
              />
              <DeleteButton handleDelete={handleDelete} todoId={todo.id} />
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
      ))
      }
    </>

  );
};
