import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import {Toaster} from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
      <div className="min-h-screen w-screen overflow-hidden">
        <App />
        <Toaster position="top-right"/>
      </div>
   </Provider>
  </StrictMode>,
)
