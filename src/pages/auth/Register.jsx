import React from 'react'
import Layout from '../../components/layout/Layout'

const Register = () => {
  return (
   

    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 height-full">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold ">Welcome</h2><br />
        <h2 classNameName="mb-12 text-center text-2xl pt-0">Register here to continue</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-left " for="username" >Username</label>
            <input id="username" type="text" name="email" placeholder='Enter your Username' className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-left" for="password">Password</label>
            <input id="password" type="password" name="password"  placeholder='Enter your password' className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
              <label for="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
            </div>
            <a href="#" className="text-sm"> Forgot your password? </a>
          </div>
          <div className="mt-6">
            <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-500 active:bg-green-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Register</button>
          </div>
        
        </form>
      </div>
    </div>
    
  )
}

export default Register