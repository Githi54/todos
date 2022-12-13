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
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from './Components/Context/TodoContext';
import { useAppSelector } from './Redux/hook';
import { useDispatch } from 'react-redux';

export function App() {
  const [todos, setTodos] = useContext(TodoContext);
  // const dispatch = useDispatch();
  // const todos = useAppSelector(state => state.todos);
  const [title, setTitle] = useState('');

  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
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
                    setTitle={setTitle}
                    todos={todos}
                    title={title}
                    setTodos={setTodos}
                  />
                </MDBCard>
              </div>

              <hr className="my-4" />
              <TodoList todos={todos} setTodos={setTodos} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
