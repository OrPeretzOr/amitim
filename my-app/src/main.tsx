import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationPage from './Pages/destinationPage/destinationPage.tsx';


createRoot(document.getElementById('root')!).render(
  
  <BrowserRouter>
  <Routes>
  <Route path="/home" element={<App />}/>
  <Route path="/destenation" element={ <DestinationPage/>}/>

  </Routes>
</BrowserRouter>
  

)
