import { MDBIcon } from "mdb-react-ui-kit";

export const TodosInfo = () => {
  return (
    <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
      <MDBIcon fas icon="check-square" className="me-1" />
      <u>Todos (5)</u>
    </p>
  );
};
