import { MDBIcon } from "mdb-react-ui-kit";

type Props = {
  todosLength: number;
};

export const TodosInfo: React.FC<Props> = ({ todosLength }) => {
  return (
    <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
      <MDBIcon fas icon="check-square" className="me-1" />
      <u>Todos ({todosLength})</u>
    </p>
  );
};
