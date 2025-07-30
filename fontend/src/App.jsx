import { useState } from 'react'
import './App.css'
import FullWebsite from './FullWebsite'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <div className='bg-gray-900 h-screen overflow-auto'>
          <FullWebsite />
        </div>
      </Router>
    </>
  )
}

export default App
