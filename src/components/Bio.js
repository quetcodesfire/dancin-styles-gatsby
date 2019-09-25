import React from 'react'

import Temi from '../images/temi.png'

const Bio = () => (
  <section className="bio-container" style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center`, background: `#fff`}}>
    <img src={Temi} alt="Temi" style={{ maxWidth: `40%` }} />
    <section className="bio">
      <p className="bio-paragraph" style={{fontSize: `24px`}}>Temi Roberts is your AFAA certified Zumba and Dancehall fusion instructor who has always had a passion for dance 
      and is now offering classes with various world rhythms from African, Caribbean and hip hop music that'll keep you moving
      and melting the calories away. Get signed up today for a fun, lusty, vibrant experience.</p>
      <q className="bio-quote" style={{fontSize: `18px`}}>My mission is to help others focus on the vast benefits of dancing while building a community of people who can share positive vibes and energy.</q>
    </section>
  </section>
)

export default Bio