import { MDBTooltip, MDBIcon } from 'mdb-react-ui-kit';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
  editTodoId: number | null;
  handleEdit: (title: string, id: number) => void;
};

export const EditButton: React.FC<Props> = ({
  todo: { id, title },
  editTodoId,
  handleEdit,
}) => {
  return (
    <MDBTooltip
      tag="a"
      type="button"
      wrapperProps={{ href: '#!' }}
      title="Edit todo"
    >
      <MDBIcon
        fas
        icon="pencil-alt"
        className="me-3"
        color="info"
        hidden={id === editTodoId}
        onClick={() => handleEdit(title, id)}
      />
    </MDBTooltip>
  );
};