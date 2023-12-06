import { useAuth } from "./Security"
import { useNavigate } from "react-router-dom"

export const Profile = () =>{

    const auth= useAuth()
    const navigate= useNavigate();
    const handleLogout= () =>{
        auth.Logout()
        navigate('/')
    }


    return (

        <>
        <div class='login'>
            Welcome {auth.user}
         
        <button className="btn" onClick={handleLogout}>Logout</button>
        </div>
        </>
    )
}
