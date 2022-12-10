import { MDBCardBody, MDBBtn } from "mdb-react-ui-kit";
import { useCallback } from "react";
import { Todo } from "../../types/Todo";

type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todos: Todo[];
  title: string;
};

export const AddInput: React.FC<Props> = ({ setTitle, setTodos, todos, title }) => {
  const handleChangeInput = useCallback(({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setTitle(value), [setTitle]);

  const handleAdd = useCallback(() => {
    if (title === '') {
      return;
    }

    setTitle('');

    const id = todos.length + Math.floor(Math.random() * 100) * Math.floor(Math.random() * 500);
    console.log(id);
    

    setTodos([...todos, {
      id,
      title: title.trim(),
      completed: false,
    }]);
  }, [setTitle, setTodos, title, todos]);

  const handleKeyDown = useCallback((event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleAdd();
    }
  }, [handleAdd])

  return (
    <MDBCardBody>
      <div 
        className="
          d-flex 
          flex-row 
          align-items-center
        "
        onKeyDown={handleKeyDown}
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
      </div>
    </MDBCardBody>
  );
};