import React from 'react'
import { Link } from 'react-router-dom'
import { useDeleteBlogMutation } from '../feature/blog'

const BlogCard = ({blog}) => {
    const [deleteBlog] = useDeleteBlogMutation();
    
  return (
    <div>
        <div className=' flex flex-col w-72 shadow rounded '>
            <img className=' w-[200px]' src= {blog.image}/>
            <div>
                <p>{blog.title}</p>
                <p>{blog.desc}</p>
                <Link to ={`/detail/${blog.id}`}> 
                <button className=' bg-gray-500 text-white rounded px-6 py-1 shadow'>Detail</button>
                </Link>

                <button onClick={()=> deleteBlog(blog.id)} className=' bg-red-500 text-white rounded px-6 py-1 shadow'>Deleate</button>

               
            </div>
        </div>
    </div>
  )
}

export default BlogCard