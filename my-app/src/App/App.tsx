import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Footer from './Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <header className='header'>
        <Header/>
      </header>
      <main className="content">
        Content goes here
      </main>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
