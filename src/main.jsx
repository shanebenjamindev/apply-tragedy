import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "657363306519-4tl1phcpujc6lok8e9ve1dghi88tla36.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    < GoogleOAuthProvider clientId={"657363306519-4tl1phcpujc6lok8e9ve1dghi88tla36.apps.googleusercontent.com"} >
      <App />
    </GoogleOAuthProvider >
  </Provider>

)
