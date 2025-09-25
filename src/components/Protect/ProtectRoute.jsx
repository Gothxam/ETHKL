import { Navigate, Outlet } from 'react-router-dom';
import Home from '../../pages/home/Home'

export const ProtectRoute = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <>
    {user ? <Outlet/> :<Navigate to={"/login"}/> }
    </>
  )
}
