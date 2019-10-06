import React from 'react'

import {Button, TextField} from '@material-ui/core'

import PurpleLights from '../assets/images/purple-lights.jpg'
{/* <form action="https://marquetreid.us20.list-manage.com/subscribe/post?u=ecebda3c51f097fdbeccc693d&amp;id=bca88487e5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate></form> */}
const EmailSignup = () => (
  <section className="email-signup-container" style={{background: `url(${PurpleLights}) no-repeat center center`, backgroundSize: `cover`}}>
    <div className="email-signup-information">
      <p>Looking for dancing and fitness tips as well as being kept up to date with our latest developments?</p>
      <p>Signup for our email list below!</p>
      <form action="https://marquetreid.us20.list-manage.com/subscribe/post?u=ecebda3c51f097fdbeccc693d&amp;id=bca88487e5" method="post" className="email-signup-form" noValidate autoComplete="off">
      <TextField id="email-input" className="email-signup-input" label="email" type="email" variant="filled"  />
      </form>
      <Button className="email-signup-button" variant="outlined">Submit</Button>
    </div>
  </section>
)

export default EmailSignup