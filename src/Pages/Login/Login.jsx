import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='container'>
            <div className="wrapper">
                <div className="title">LOG IN</div>
                <form className='form'>
                    <input type="text" name="name" placeholder='Name'/>
                    <input type="text" placeholder='PassWord' name="password"/>
                </form>
                <button className='btn'>Submit</button>
            </div>
        </div>
  )
}

export default Login