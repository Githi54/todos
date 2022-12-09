import { MDBListGroup, MDBListGroupItem, MDBCheckbox, MDBTooltip, MDBIcon } from "mdb-react-ui-kit";
import { useCallback } from "react";
import { Todo } from "../../types/Todo";

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const handleDelete = useCallback((id: number) => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo => todo.id === id)

    newTodos.splice(indexTodo, 1);

    setTodos(newTodos);
  }, [setTodos, todos]);

  return (
    <>
    {todos.map(({id, title, completed}) => (
        <MDBListGroup horizontal className="rounded-0 bg-transparent" key={id}>
          <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckChecked"
              defaultChecked={completed}
            />
          </MDBListGroupItem>
          <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
            {" "}
            <p className="lead fw-normal mb-0">
              {title}
            </p>
          </MDBListGroupItem>
          <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
            <div className="d-flex flex-row justify-content-end mb-1">
              <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#!" }}
                title="Edit todo"
              >
                <MDBIcon
                  fas
                  icon="pencil-alt"
                  className="me-3"
                  color="info"
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
                  onClick={() => handleDelete(id)} 
                />
              </MDBTooltip>
            </div>
            <div className="text-end text-muted">
              <MDBTooltip
                tag="a"
                wrapperProps={{ href: "#!" }}
                title="Created date"
              >

              </MDBTooltip>
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
      ))
    }
    </>
    
  )
};
