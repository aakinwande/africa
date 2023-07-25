import React from 'react'
import "./SignUpFormStyles.css";


const SignUpForm = () => {
  return (
    <div className="form-container">
    <h1>Sign Up!</h1>
    <form>
      <input placeholder="Name" />
      <input placeholder="Password" />
      <a href="/home">
        <button>Login</button>
      </a>
      
    </form>
  </div>
  )
}

export default SignUpForm
