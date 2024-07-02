import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser,setAuthUser] = useAuth();

    const logoutUser = ()=>{
        try{

            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfully")
            window.location.reload()
        }catch(err){
            console.log(err.message);
            toast.success("Error: " + err.message)
        }
    }

  return (
    <div>
       <button onClick={logoutUser} className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer">Logout</button>
    </div>    
)
}

export default Logout