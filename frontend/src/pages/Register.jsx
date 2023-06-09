import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

const Register = () => {
  const { user, isSuccess, isLoading, message, isError } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match!!!')
      return
    }

    if (!name || !email || !password) {
      toast.error('Please provide all fields!')
      return
    }

    const user = {
      name,
      email,
      password,
    }

    dispatch(register(user))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <React.Fragment>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </React.Fragment>
  )
}

export default Register
