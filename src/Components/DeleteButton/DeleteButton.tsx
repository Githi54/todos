import { MDBTooltip, MDBIcon } from 'mdb-react-ui-kit';

type Props = {
  handleDelete: (id: number) => void;
  todoId: number;
};

export const DeleteButton: React.FC<Props> = ({ handleDelete, todoId }) => {
  return (
    <MDBTooltip
      tag="a"
      type="button"
      wrapperProps={{ href: '#!' }}
      title="Delete todo"
    >
      <MDBIcon
        fas
        icon="trash-alt"
        color="danger"
        onClick={() => handleDelete(todoId)}
      />
    </MDBTooltip>
  );
};
