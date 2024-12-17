import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Pazam from '../Pazam/Pazam'
import Footer from '../Footer/Footer'
import Cars from '../Cars/Cars'

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
