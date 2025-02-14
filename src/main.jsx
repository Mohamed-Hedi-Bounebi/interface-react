import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/navbar/navbar'
import Body from './components/main/body'
import Footer from './components/footer/footer'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Body/>
    <Footer/>
  </StrictMode>,
)
