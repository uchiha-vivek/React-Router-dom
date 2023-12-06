import { createContext, useContext, useState } from "react";


const SecureContext = createContext(null);


export const  SecureProvider = ({children}) =>{
    const[user,setUser] = useState(null)
    const Login = (user) =>{
        setUser(user)
    }
    const Logout= (user) =>{
        setUser(null)
    }

    return(

        <>
        <SecureContext.Provider value={{user,Login,Logout}}>{children}</SecureContext.Provider>
        
        </>
    )
}

export const useAuth =()=>
{
    return useContext(SecureContext)
}