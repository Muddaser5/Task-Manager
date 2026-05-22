import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

// import { getLocalStorage, setlocalStorage } from './utils/localStorage'


const App = () => {

  //   useEffect (() => {
  //     setLocalStorage()
  // getLocalStorage()

  //   },[])

  const [user, useUser] = useSate(null)
  const [loggedInUserData, setLoggedInUserData] = useState [null]
  const authData = useContext(AuthContext)

  


  const hadleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')

    } else if (authData && authData.employees.find((e) => e.email && e.password == password)) {
      setUser('employee')


    } else {
      alert("Invaild Credentails")
    }
  }



  return (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmployeDashboard />}

    </>)
}


export default App