import React from 'react'          // Import React for building the component
import Form from "./form/Form"     // Import the Form component for registration
import axios from 'axios'    
import { useNavigate } from 'react-router-dom'      // Import axios for making HTTP requests

const Register = () => {

  const navigate = useNavigate()
const handleRegister =  async(data) => { // Function to handle registration logic
   const response = await axios.post("https://react30.onrender.com/api/user/register",data) // Send a POST request to the registration endpoint
   try {
   if(response.status === 201){
    navigate('/login')
   }else{
    alert("Registration failed")
   }
  } catch (error) {
    alert(error?.response?.data?.message)
   }
}
  return (
   
    <>
    <Form type="register" onSubmit={handleRegister} />  
    </>
    
  )
}

export default Register