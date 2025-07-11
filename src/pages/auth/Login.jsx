import React from 'react'
import Form from './form/Form'
import Layout from '../../components/layout/Layout'
import axios from 'axios'          // Import axios for making HTTP requests
import { useNavigate } from 'react-router-dom'      // Import useNavigate for navigation

const Login = () => {
  const handleLogin = (data) => {
    // Handle login logic here

    const navigate = useNavigate()
    const handleLogin =  async(data) => { // Function to handle registration logic
       const response = await axios.post("https://react30.onrender.com/api/user/login",data) // Send a POST request to the registration endpoint
       try {
       if(response.status === 200){
        navigate('/')
       }else{
        alert("Login failed")
       }
      } catch (error) {
        alert(error?.response?.data?.message)
       }
    }
  }
  return (
    
<>
<Layout>

<Form type="login" onSubmit={handleLogin}/>
</Layout>
</>

      
  )
}

export default Login