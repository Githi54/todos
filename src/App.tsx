import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";

import { TodosInfo } from './Components/TodosInfo';
import { AddInput } from './Components/AddInput';
import { TodoList } from './Components/TodosList';

export function App() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard
            id="list1"
            style={{ borderRadius: ".75rem", backgroundColor: "#eff1f2" }}
          >
            <MDBCardBody className="py-4 px-4 px-md-5">
              <TodosInfo />
              <div className="pb-2">
                <MDBCard>
                  <AddInput />
                </MDBCard>
              </div>
              <hr className="my-4" />

              <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
                <p className="small mb-0 me-2 text-muted">Filter</p>
                <p className="small mb-0 ms-4 me-2 text-muted">Sort</p>
                <MDBTooltip
                  tag="a"
                  wrapperProps={{ href: "#!" }}
                  title="Ascending"
                >
                  <MDBIcon
                    fas
                    icon="sort-amount-down-alt"
                    className="ms-2"
                    style={{ color: "#23af89" }}
                  />
                </MDBTooltip>
              </div>
              <TodoList />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
