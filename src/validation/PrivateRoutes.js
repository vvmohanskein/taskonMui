import { useEffect } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom"


export function PrivateRoutes(){
const navigate = useNavigate();

const location = useLocation()
console.log(location.pathname);
const auth = localStorage.getItem("token")
/* The `useEffect` hook is used to perform side effects in a functional component. In this case, it is
used to check the authentication status and navigate to the login page if the user is not
authenticated. */
// useEffect(() => {
//     // Check the authentication status and navigate to login if not authenticated
//     if (!auth) {
//       navigate('/');
//       console.log("if comming");
//     }
//     else if(auth ) {
//         navigate(`${location.pathname}`)

//     }
//   }, [auth, navigate]);
//   console.log("12345",`${location.pathname}`);

  return auth ? <Outlet /> : null;
// return(
// auth ? (auth ? <Outlet/> : null ) : <Navigate to="/"/>
// )

}