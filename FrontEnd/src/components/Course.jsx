import React,{useState,useEffect} from 'react'
import Card from './Card'
import axios from 'axios'

import { Link } from 'react-router-dom';
const Course = () => {
  // const filterData = book.filter((item)=> item.category==="Paid");
  // console.log(filterData);

  const [book,setBook] = useState([]);

  useEffect(()=>{
     const getBook = async ()=>{
      try{
        const response = await axios.get('http://localhost:8000/book');
        console.log(response.data);
        setBook(response.data);
      }
      catch(err){
        console.log(err);
      }
     }

     getBook();
  },[])


  return (
    <div className="max-w-screen-2xl container mx-auto md:m-6 md:px-20 pl-2 pr-10">
      <div className='pt-28 items-center justify-center text-center'>
        <h1 className="text-2xl md:text-4xl"> We are delighted to have you <span className="text-pink-500">here : )</span> </h1>
        <p className="mt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, incidunt ab. Voluptate quas sapiente dolor, deserunt minus ipsa quam ducimus at natus obcaecati similique cumque earum, blanditiis iste rem fugiat doloremque temporibus ratione suscipit aliquid, fuga dicta. Blanditiis, error nihil!
        </p>
        <Link to='/'>
        <button className=" mt-6 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300 ">Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {book.map((item )=>{
          return <Card item={item}/>
        })}
      </div>

    </div>
  )
}

export default Course