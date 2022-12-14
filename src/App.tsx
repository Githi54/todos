import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';

import { TodosInfo } from './Components/TodosInfo';
import { AddInput } from './Components/AddInput';
import { TodoList } from './Components/TodosList';
import { Todo } from './types/Todo';
import { useAppSelector } from './Redux/hook';

export function App() {
  const todos: Todo[] = useAppSelector<Todo[]>(state => state.todos);

  return (
    <MDBContainer className="py-5">
      <MDBRow 
        className="
          d-flex 
          justify-content-center 
          align-items-center 
          h-100
        ">
        <MDBCol>
          <MDBCard
            id="list1"
            style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}
          >
            <MDBCardBody className="py-4 px-4 px-md-5">
              <TodosInfo todosLength={todos.length} />
              <div className="pb-2">
                <MDBCard>
                  <AddInput
                    todos={todos}
                  />
                </MDBCard>
              </div>

              <hr className="my-4" />
              <TodoList todos={todos} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
