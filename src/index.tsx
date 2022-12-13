import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { App } from './App';
import { TodoProvider } from './Components/Context/TodoContext';
import { store } from './Redux/store';

ReactDOM.render(
  <Provider store={store}>
    <TodoProvider>
      <App />
    </TodoProvider>
  </Provider>,
  document.getElementById('root')
);