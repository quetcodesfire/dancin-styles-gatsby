import React from 'react'

import {Button} from '@material-ui/core'

import DanceClass from '../images/dancin-styles-class2.jpg'

const Registration = () => (
  <>
    <section className='registration-container' style={{display: `flex`, flexDirection: `row`, justifyContent: `center`}}>
    <section className="class-registration-picture" style={{background: `url(${DanceClass}) no-repeat center center`, backgroundSize: `cover`, height: `100vh`, width: `50%`}}>
    </section> 
      <section className="class-registration-text" style={{width: `50%`, display: `flex`, flexDirection: `column`, justifyContent: `center`, background: `#000`}}>
        <h2 style={{color: `#fff`, textAlign: `center`}}>WANT TO HAVE A GOOD TIME WHILE MEETING YOUR FITNESS GOALS?</h2>
        <p style={{color: `#fff`, textAlign: `center`}}>COME TO MY NEXT DANCEHALL FUSION DANCE CLASS AND DANCE YOUR WAY TO A BETTER YOU!</p>
        <Button variant="contained" style={{backgroundColor: `darkOrchid`, width: `10vw`, marginLeft: `20vw`}}>Register Here</Button>
      </section>
    </section>
  </>
)

export default Registration