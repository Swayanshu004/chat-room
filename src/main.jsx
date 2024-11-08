import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <App />
    <Footer />
  </>,
)
