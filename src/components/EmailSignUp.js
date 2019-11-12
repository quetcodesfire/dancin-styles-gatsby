// import React from 'react'
import React, {useState} from 'react'

// import {useInput} from '../hooks/useInput'
import {Button, TextField} from '@material-ui/core'

import PurpleLights from '../assets/images/purple-lights.jpg'
// import Axios from 'axios'

// const {value, bind, reset} = useInput('')
// const [state , setState] = useState({
//   email : "",
//   password : ""
// })

// alert(`Submitting Email ${value}`)

    // Axios.post('/urlHere', {
    //   email: value
    // })
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })

    // reset()

const EmailSignup = () => {
  const [email, setEmail] = useState('')

  const handleChange = e => {
    const userEmail = e.target.value
    console.log(userEmail)
    setEmail(userEmail)
  }

  const handleSubmit = e => {
    // e.preventDefault()
    console.log('submitted')
    console.log('email: ', email)
    // handleChange()
  }

  return (
    <section className="email-signup-container" style={{background: `url(${PurpleLights}) no-repeat center center`, backgroundSize: `cover`}}>
      <div className="email-signup-information">
        <p>Looking for dancing and fitness tips as well as being kept up to date with our latest developments?</p>
        <p>Signup for our email list below!</p>
        <form className="email-signup-form" action="https://gem.godaddy.com/signups/subscribe/7e37cbee9ef54fa382833132333ef563" method="post" noValidate autoComplete="off">
        <TextField id="email-input" className="email-signup-input" label="email" type="email" variant="filled" onChange={handleChange} value={'test@email.com'} />
        <Button className="email-signup-button" type="submit" variant="outlined" onClick={handleSubmit}>Subscribe</Button>
        </form>
      </div>
    </section>
  )
}

export default EmailSignup


{/* <div className="email-signup-information">
      <p>Looking for dancing and fitness tips as well as being kept up to date with our latest developments?</p>
      <p>Signup for our email list below!</p>
      <form onSubmit={handleSubmit} className="email-signup-form" noValidate autoComplete="off">
      <TextField 
      id="email-input" 
      className="email-signup-input" 
      label="email" 
      type="email" 
      variant="filled"
      {...bind}
      />
      <Button className="email-signup-button" type="submit" variant="outlined">Submit</Button>
      </form>
    </div> */}
