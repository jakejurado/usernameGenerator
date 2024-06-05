import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UsernameProvider from './provider/UsernameProvider.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsernameProvider>
      <App />
    </UsernameProvider>
  </React.StrictMode>,
)
