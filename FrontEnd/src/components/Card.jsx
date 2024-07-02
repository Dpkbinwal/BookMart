import React from 'react'

function Card({item}) {
    console.log(item);
    // console.log("hii this is me");
    return (
        <>
            <div mt-4 my-3 p-4>
                <div className="  dark:bg-slate-900 dark:text-white card w-92 p-3 bg-base-100 shadow-xl my-3 hover:scale-105 duration-200">
                    <figure><img src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions flex justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] badge-outline hover:bg-pink-500 hover:text-white duration-200 mr-4 md:mr-0">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card