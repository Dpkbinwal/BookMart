import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog"  onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link to='/'><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
          
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