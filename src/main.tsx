import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <SnackbarProvider maxSnack={5} autoHideDuration={5000} preventDuplicate>      
      <App />
    </SnackbarProvider>
  </Provider>
</StrictMode>,
)
