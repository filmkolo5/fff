import React from 'react'
export default function login() {
  return (
  
  <div className='bg'>
    <div className='bg-login'>
    <div className='logo'>
      <img src="/img/2.png" alt=''/>
   <h2>PEA</h2>
   <input type=" ID"name=" ID"placeholder="EMPLOYEE ID" />
    <input type=" password"name=" password"placeholder="PASSWORD" />
    <a href='#'> Forget Password</a>
    <button className='bt'>LOGIN</button>
    </div>
  </div>
  
  </div>
  )
}