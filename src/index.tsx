import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './Redux/store';

const container = document.getElementById('root');
const root = container && createRoot(container);

root?.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
