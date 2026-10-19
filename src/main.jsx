import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ApiData from "./components/ApiData.jsx"
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ApiData>
      <App/>
    </ApiData>
    </Provider>
  </StrictMode>,
)
