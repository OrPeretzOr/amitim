import { useState } from 'react'
import './App.css'
import Header from '../Components/Header/Header'
import Pazam from '../Components/Pazam/Pazam'
import Footer from '../Components/Footer/Footer'
import Cars from '../Components/Cars/Cars'

function App() {
  const points = 4;
  const name = "אור"



  return (
    <div className='container'>
      <header className='header'>
        <Header/>
      </header>
      
      <main className="content">
        <Pazam points = {points} />
        <Cars name={name} cars={[]}/>
        
      </main>

      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
