import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'

const App =() => {

  useEffect (() => {
    setlocalStorage()

  },[])

  return (

<>
 <Login/> 

{/* <EmployeDashboard/> */}

{/* <AdminDashboard/> */}

</>  )
}


export default App