import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store.jsx'
import { Provider } from 'react-redux'
import { LoadingProvider } from './context/LoadingContext.jsx'
createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <LoadingProvider >
        <App />
      </LoadingProvider>
    </BrowserRouter>
  </Provider>
)
