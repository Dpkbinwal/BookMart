import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import About from './components/About'
import Signup from './components/Signup'
import { useAuth } from './context/AuthProvider'


function App() {
  
  const [authUser]= useAuth();
  // console.log(authUser);
  return (
    <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={authUser ? <Courses/>:<Navigate to="/signup"/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default App