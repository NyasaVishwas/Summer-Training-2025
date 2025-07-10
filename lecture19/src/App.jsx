import React from 'react'
import './App.css'
import Parent from './components/Parent'

function App() {
  
  const user={
    name:"Sia",
    email:"abc@gamil.com",
    role:"Data Scientist"
  }

  return (
    <div className="min-h-screen bg-gray-100 flex intems-center justify-center p-6">
      <Parent user_for_parent = {user}/>
    </div>
  )
}

export default App
