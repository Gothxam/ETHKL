import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import { store } from './redux/store.js';
import { HashRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store} >
  <HashRouter>
    <App />
  </HashRouter>
  <ToastContainer />
  </Provider>

  </StrictMode>
)
