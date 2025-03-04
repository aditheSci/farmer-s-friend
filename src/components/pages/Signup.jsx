import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/signin")
  }
  return (
    <div className="h-screen w-screen flex justify-between">
      <div className="left text-3xl font-circular-web w-1/2 bg-yellow-300 flex justify-center items-center">
        SignUp
      </div>
      <div className="right w-1/2 bg-blue-100 flex justify-center items-center">
        <form action="submit" className="w-full max-w-sm p-4">
          <div className="flex flex-col mb-4">
            <label className="font-general text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col mb-8">
            <label className="font-general text-lg mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-2 border border-gray-300 rounded"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center font-robert-medium mt-4">
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={(e) => submitHandler(e)}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
