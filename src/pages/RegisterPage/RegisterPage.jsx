import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../LoginPage/LoginPage.css'



function RegisterPage() {
    const navigate = useNavigate();
  return (
    <>

    <div className='login-form'>
        <p className='title'>Register</p>   
        <div className="form"><input type="text" placeholder="Username" />
        <input type="text" placeholder='Password' className='pw' />
        <input type="text" placeholder='Confirm Password' className='pw'/></div>
        <button>Register</button>
        <p onClick={()=>{
            navigate('/loginPage');
        }}>Already have an account? Log In.</p>
    </div>
    </>
  )
}

export default RegisterPage
