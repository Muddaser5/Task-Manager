import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

// import { getLocalStorage, setlocalStorage } from './utils/localStorage'


const App = () => {

  const [user, useUser] = useSate(null)
  const [loggedInUserData, setLoggedInUserData] = useState[null]
  const authData = useContext(AuthContext)

useEffect (() => {
  const loggedInUser= localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData =JSON.parse(loggedInUser)
    setLoggedInUserData(userData.role)
localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
  }
})


  const hadleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }

    } else {
      alert("Invaild Credentails")
    }
  }



  return
   (
    <>

      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : (user == employee ? <EmployeDashboard data={loggedInUserData} /> : null)}

    </>
  )
}


export default App