import React from 'react'
import { useGetBlogsQuery } from '../feature/blog'
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery();

  return (
    <div>

      <div className=' flex justify-center mt-5'>
        <Link to={'/create'}>
         <button className=' bg-gray-500 text-white rounded px-6 py-1 shadow'>
        create Blogs
      </button>
        </Link>
       
      </div>
      
      <div className=' flex flex-wrap gap-5 justify-center mt-20'>
        {blogs?.map((blog)=>{
        return <BlogCard key={blog.id} blog={blog}/>
      })}
      </div>
      
    </div>
  )
}

export default Blogs