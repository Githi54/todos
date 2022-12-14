import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../Redux/features/todosReduser';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
  newTitle: string;
  setEditTodoId: (todoId: number | null) => void;
  handleDelete: (todoId: number) => void;
  setNewTitle: (title: string) => void;
};

export const EditForm: React.FC<Props> = ({
  todo,
  newTitle,
  setEditTodoId,
  handleDelete,
  setNewTitle,
}) => {
  const dispatch = useDispatch();
  const handleRename = useCallback((todo: Todo) => {
    dispatch(actions.rename(todo.id, newTitle));
    setEditTodoId(null);
  }, [newTitle]);
  const handleSubmit = useCallback((event: { preventDefault: () => void; }, todo: Todo, newTitle: string) => {
    event.preventDefault();

    if (newTitle.trim().length === 0) {
      handleDelete(todo.id);
    } else {
      handleRename(todo);
    }
  }, [handleRename]);

  const handleChangeInput = useCallback(({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setNewTitle(value), []);

  return (
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
  );
};