import React,{ useState} from 'react'
import   {Link } from 'react-router-dom'

const Form = ({type, onsubmit}) => {
// State to hold the form data
  const [data, setData] =useState({
    email: '',
    username: '',
    password: ''
  })
   // Handle change function to update the state
  const handleChange = (e) => {    // Function to handle input changes
    const {name,value} = e.target  // Destructure name and value from the event target
    setData({                      // Update the state
      ...data,
      [name]: value
    })
  }
    const handleSubmit = (e) => {  // Function to handle form submission
      e.preventDefault()       // Prevent the default form submission
        onSubmit(data)
    }
  
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
    <div className="w-full sm:max-w-md p-5 mx-auto">
      <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome</h2><br />
      <h2 className="mb-12 text-center text-2xl pt-0">

         { type === 'login'? "login here to continue"  : "Register here to continue"}</h2><br />
         
      <form onSubmit = {handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="email"></label>
          <input id="email" type="text" name="email" placeholder=' Email Adress' className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" onChange={handleChange} required/>
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="username"></label>
          <input id="username" type="text" name="username" placeholder=' Username' className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full " onChange={handleChange} required/>
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password"></label>
          <input id="password" type="password" name="password"  placeholder=' password' className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"onChange={handleChange}  required/>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center">
            <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
            <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
          </div>
          <a href="#" className="text-sm"> Forgot your password? </a>
        </div>
        <div className="mt-6">
          <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign In</button>
        </div>

        <div className="mt-6 text-center">
        {
            // if the type is login, show the register link and vise versa
            type=== 'login' ?( 

          < Link to="/Register" className="underline">Sign up to create an account</Link>)
            : (
              <Link to="/login" className="underline mt-6 text-center">Already have an account? Sign in</Link>
            )
        }
        </div>


      </form>
    </div>
  </div>
  )
}

export default Form