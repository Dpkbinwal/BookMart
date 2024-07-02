import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:m-6 md:px-20 pl-2 pr-10 flex flex-col md:flex-row">
                <div className="w-full  md:w-1/2 md:m-8 md:mt-32 ml-4 order-2 md:order-1">
                    <h1 className="text-4xl font-bold">
                        Hello, welcome here to learn something
                        <span className="text-pink-500"> new everyday!!!</span>
                    </h1>
                    <p className='text-sm mt-4 '>Lorem, ipsum dolor.lorem5 Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, quibusdam!</p>

                    <label className="input input-bordered flex items-center gap-2 mt-5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <button className="btn btn-outline btn-secondary mt-5">Subscribe</button>
                </div>

                <div className="w-full md:w-1/2 m-4 md:m-32 order-1 md:order-2">
                    <img className="w-90 h-90" src='https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Books" />
                </div>
            </div>
        </>
    )
}

export default Banner