import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleBlogQuery } from '../feature/blog';
import { Link } from 'react-router-dom';

export const Detail = () => {
    const {id} = useParams();
    const {data : blog} = useGetSingleBlogQuery(id)
    console.log(blog)
  return (
    <div>
        <div className=' flex  justify-around items-center'>
            <img className=' w-[400px]' src={blog?.image} alt="" />
            <div>
                <p>{blog?.title}</p>
                <p>{blog?.desc}</p>
                <Link to={"/"}> 
                <button className=' bg-gray-500 text-white rounded px-6 py-1 shadow'> Back </button>
                </Link>
           
            </div>    
        </div>
    </div>
  )
}
