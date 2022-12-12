import { MDBListGroup, MDBListGroupItem, MDBCheckbox, MDBTooltip, MDBIcon } from "mdb-react-ui-kit";
import { useCallback, useState } from "react";
import { Todo } from "../../types/Todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const [newTitle, setNewTitle] = useState('');
  const [visibleId, setVisibleId] = useState<number | null>(null);

  const handleEdit = useCallback((title: string, id: number) => {
    setVisibleId(id);
    setNewTitle(title);
  }, []);

  const handleChangeInput = useCallback(({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setNewTitle(value), []);

  const handleDelete = useCallback((id: number) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo => todo.id === id)

    newTodos.splice(indexTodo, 1);

    setTodos(newTodos);
  }, [setTodos, todos]);

  const handleAdd = useCallback((todo: Todo) => {
    todo.title = newTitle;

    setVisibleId(null);

    return todo;
  }, [newTitle]);

  const handleSubmit = useCallback((event: { preventDefault: () => void; }, todo: Todo, newTitle: string) => {
    event.preventDefault();

    if (newTitle.trim().length === 0) {
      handleDelete(todo.id)
    } else {
      handleAdd(todo);
    }
  }, [handleAdd, handleDelete])


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
            {visibleId === todo.id
              ? (
                <form
                  className="
                    d-flex 
                    flex-row 
                    align-items-center
                  "
                  onSubmit={(event) => handleSubmit(event, todo, newTitle)}
                >
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="exampleFormControlInput1"
                    placeholder="Empty todo is delete"
                    value={newTitle}
                    onChange={handleChangeInput}
                  />
                </form>
              )
              : (
                <p className="lead fw-normal mb-0">
                  {todo.title}
                </p>
              )
            }
          </MDBListGroupItem>
          <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
            <div className="d-flex flex-row justify-content-end mb-1">
              <MDBTooltip
                tag="a"
                type="button"
                wrapperProps={{ href: "#!" }}
                title="Edit todo"
              >
                <MDBIcon
                  fas
                  icon="pencil-alt"
                  className="me-3"
                  color="info"
                  hidden={todo.id === visibleId}
                  onClick={() => handleEdit(todo.title, todo.id)}
                />
              </MDBTooltip>
              <MDBTooltip
                tag="a"
                type="button"
                wrapperProps={{ href: "#!" }}
                title="Delete todo"
              >
                <MDBIcon
                  fas
                  icon="trash-alt"
                  color="danger"
                  onClick={() => handleDelete(todo.id)}
                />
              </MDBTooltip>
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
      ))
      }
    </>

  )
};
