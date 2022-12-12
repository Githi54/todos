import { MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import { useCallback } from "react";
import { Todo } from "../../types/Todo";

type Props = {
  setTitle: (arg0: string) => void;
  setTodos: (arg0: Todo[]) => void;
  todos: Todo[];
  title: string;
};

export const AddInput: React.FC<Props> = ({ setTitle, setTodos, todos, title }) => {
  const handleChangeInput = useCallback(({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setTitle(value), [setTitle]);

  const handleAdd = useCallback((event: { preventDefault: () => void; }) => {
    event.preventDefault();

    if (title === '') {
      return;
    }

    setTitle('');

    const id = todos.length + Math.floor(Math.random() * 100) * Math.floor(Math.random() * 500);

    setTodos([...todos, {
      id,
      title: title.trim(),
      completed: false,
    }]);
  }, [setTitle, setTodos, title, todos]);

  return (
    <MDBCardBody>
      <form 
        className="
          d-flex 
          flex-row 
          align-items-center
        "
        onSubmit={event => handleAdd(event)}
      >
        <input
          type="text"
          className="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Add new..."
          onChange={handleChangeInput}
          value={title}
        />

        <div className='p-3'>
          <MDBBtn onClick={handleAdd}>Add</MDBBtn>
        </div>
      </form>
    </MDBCardBody>
  );
};
