import React from 'react'

import {Button} from '@material-ui/core'

import DanceClass from '../assets/images/dancin-styles-class2.JPG' // trouble renaming this to lowercase "jpg"

const Registration = () => (
  <>
    <section className='registration-container' id="classes">
      <section className="class-registration-picture" style={{background: `url(${DanceClass}) no-repeat center center`, backgroundSize: `cover`}}>
      </section> 
      <section className="class-registration-text">
        <h2>WANT TO HAVE A GOOD TIME WHILE MEETING YOUR FITNESS GOALS?</h2>
        <p>COME TO MY NEXT DANCEHALL FUSION DANCE CLASS AND DANCE YOUR WAY TO A BETTER YOU!</p>
        <Button className="registration-button" href="https://www.schedulicity.com/scheduling/DSFPHW" target="_blank" rel="noopener noreferrer" variant="contained">Register Here</Button>
      </section>
    </section>
  </>
)

export default Registration