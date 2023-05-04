import React, { useState } from 'react'
import { useGetCreateBlogMutation } from '../feature/blog'
import { useNavigate } from 'react-router-dom'

export const CreateBlog = () => {
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [image,setImage] = useState('')

    const nav = useNavigate();

    const [getCreateBlog] = useGetCreateBlogMutation()

    const submitHandler = e => {
        e.preventDefault();
        const newBlog = {id:Date.now(), title: title,desc: desc,image: image}
        getCreateBlog(newBlog)
        console.log(title, image,desc);
        nav('/')
    }
  return (
    <div className=' flex justify-center items-center h-screen'>
        <form onSubmit={submitHandler} className=' p-7 shadow'>
            <div className=' p-7 mb-3'>
                <input placeholder='title ...' type="text" className=' outline-none border-b-2 border-b-gray-500'  value={title} onChange={e=> setTitle(e.target.value)} name="" id="" />
            </div>
            <div className=' p-7 mb-3'>
                <input placeholder=' desc ....' type="text" className=' outline-none border-b-2 border-b-gray-500'   value={desc} onChange={e=> setDesc(e.target.value)}  name="" id="" />
            </div>
            <div className=' p-7 mb-3'>
                <input placeholder=' image url ....' type="text" className=' outline-none border-b-2 border-b-gray-500'   value={image} onChange={e=> setImage(e.target.value)}  name="" id="" />
            </div>
            <button className=' bg-gray-500 text-white rounded px-6 py-1 shadow'>
                Create
            </button>
        </form>
    </div>
  )
}
