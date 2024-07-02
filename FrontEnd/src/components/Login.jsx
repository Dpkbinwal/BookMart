import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import {toast} from "react-hot-toast"

const Login = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate();
  const onSubmit =async (data) => {

    const UserInfo = {
      email: data.email,
      password:data.password
    }


    await axios.post('http://localhost:8000/user/login', UserInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        // alert("Login Successfully")
        
        toast.success("Loggedin successful")
        // document.getElementById("my_modal_3").close();
        window.location.reload()
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }
      // navigate("/");
    }).catch((err)=>{
      console.log(err)
      // alert("Error: " + err.response.data.message)
      toast.error(err.response.data.message)
    })
  }

  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
              <a href="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></a>
            <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
          
            <h3 className="font-bold text-lg ">Login</h3>
            <div className='m-4'>
              <span>Email</span>
              <br />
              <input
                type='email'
                placeholder='Enter your email'
                className='ml-2 p-1 mt-3 mb-0 w-80 px-3 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <br />
              <span>Password</span>
              <br />
              <input
                type='password'
                placeholder='Enter password'
                className='ml-2 p-1 mt-3 w-80 px-3 border rounded-md outline-none'
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            
            <div className='flex justify-between m-5'>
                <button className="btn btn-sm bg-pink-500 duration-200 hover:text-white text-black">Login</button>
                <p>Not registered? <span className='text-blue-500 cursor-pointer underline'><Link to='/signup' >Signup</Link></span>{" "}</p>
              </div>
              </form >
          </div>
        </dialog>
      </div>
    </>
  )
}

export default Login