import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

const Signup = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
   <div className="">
    <div className="flex h-screen items-center justify-center ">
          <div className="modal-box border-[.5px] shadow-md p-4 rounded-md">
            <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to='/'><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
            
            <h3 className="font-bold text-lg ">Signup</h3>
            <div className='m-4'>
            <span>Name</span>
              <br />
              <input
                type='name'
                placeholder='Enter your fullname'
                className='ml-2 p-1 mt-3 mb-4 w-80 px-3 border rounded-md outline-none'
                {...register("name", { required: true })}
              />
               <br />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
          
              <br />
              <span>Email</span>
              <br />
              <input
                type='email'
                placeholder='Enter your email'
                className='ml-2 p-1 mt-3 mb-4 w-80 px-3 border rounded-md outline-none'
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
               <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          
            </div>
            <div className='flex justify-between m-5'>
                <button className="btn btn-sm bg-pink-500 duration-200 hover:text-white text-black">Signup</button>
                <p>Have account?{" "} <span className='text-blue-500 cursor-pointer underline'>
                  
                  <Link
                  onClick={()=> document.getElementById("my_modal_3").showModal()}
                  >
                  Login</Link></span>{" "}</p>
              </div>
            </form>
              <Login/> 
             
          </div>
          
        </div>
   </div>
  )
}

export default Signup