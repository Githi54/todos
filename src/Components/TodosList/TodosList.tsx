import { MDBListGroup, MDBListGroupItem, MDBCheckbox, MDBTooltip, MDBIcon } from "mdb-react-ui-kit";
import { todos } from "../../api/todos";

export const TodoList = () => {
  return (
    <>
    {todos.map(todo => (
        <MDBListGroup horizontal className="rounded-0 bg-transparent" key={todo.id}>
          <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckChecked"
              defaultChecked={todo.completed}
            />
          </MDBListGroupItem>
          <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
            {" "}
            <p className="lead fw-normal mb-0">
              {todo.title}
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
                wrapperProps={{ href: "#!" }}
                title="Delete todo"
              >
                <MDBIcon fas icon="trash-alt" color="danger" />
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
