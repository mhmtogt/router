import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext'
///context API, redux , localStorage
const isAuthenticated = true
//const navigate = useNavigate()
// TODO global statten okunmalı
const PrivateRouter = () => {

  const {user} = useContext(LoginContext)
  return (
    <div>user.email && user.password  <Outlet/>: <Navigate to="/login"/></div>
    // bu Navigate componenti Navigate to ile kullanılıyor 
    //useNavigate kullanımına gerek kalmadan jsx içerisinde kullanma imkanı sağlıyo bize 
    //aralarındaki fark kullanı yerleridir ,Hook olan bir event yada useEffect hook nun içerisi gibi yerlerde
  //Diğeri ise bir componenet oldupu için JSX içerisinde yönlendirme ypamk gerektiği durumlarda kullanılır
  //Link ise kullanıcıdan bir girdi ile kullanıcı tıklayarak beklediği durumlarsa kullanılabır
)

}
 
export default PrivateRouter