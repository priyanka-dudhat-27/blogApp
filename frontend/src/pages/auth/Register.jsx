// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="container">
    <form style={{maxWidth:400}} className="mx-auto mt-5">
      <h1 className="h3 mb-3 fw-normal mt-5">Please sign up</h1>

      <div className="form-floating">
        <input
          type="text"
          className="form-control "
          id="name"
          name="name"
          placeholder="Enter your name"
        />
        <label>Name</label>
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control mt-3 "
          id="email"
          name="email"
          placeholder="name@example.com"
        />
        <label>Email address</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control mt-3"
          id="password"
          name="password"
          placeholder="Password"
        />
        <label>Password</label>
      </div>

      <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
        Sign in
      </button>

      <Link to='/login' className='pt-3'>Already Register? Signin</Link>
    </form>
  </div>
  )
}

export default Register