import { MDBCardBody, MDBBtn } from "mdb-react-ui-kit";

export const AddInput = () => {
  return (
    <MDBCardBody>
      <div className="d-flex flex-row align-items-center">
        <input
          type="text"
          className="form-control form-control-lg"
          id="exampleFormControlInput1"
          placeholder="Add new..."
        />

        <div className='p-3'>
          <MDBBtn>Add</MDBBtn>
        </div>
      </div>
    </MDBCardBody>
  );
};
