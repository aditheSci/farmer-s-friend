import React from 'react'
import Navbar from '../header/Navbar'
const ImageUploader = () => {
  return (
    <div className='h-screen w-screen flex relative'>
      <div className='bg-blue-50 w-full flex justify-center p-5 flex-col'>
        <p className='text-xl font-robert-medium justify-center flex'>Uploaded Image</p>
        <img className='size-72 justify-center flex object-cover' src="https://plus.unsplash.com/premium_photo-1678548904724-8a7d6ef79eb7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29pbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
      <div className='w-full bg-red-50 flex justify-center p-5'>
        <p className='text-xl font-robert-medium'>Output</p>
      </div>
      <div className="absolute w-screen bottom-10 flex justify-center">
        <input placeholder="Image URL" className="w-full p-3 rounded-lg m-3 bg-yellow-300 font-circular-web text-xl border-2 border-black" type="text" />
        <button className="px-3 rounded-lg my-3 mr-3 bg-yellow-300 font-circular-web text-lg border-2 border-black">Upload</button>
      </div>
    </div>
  )
}

export default ImageUploader
