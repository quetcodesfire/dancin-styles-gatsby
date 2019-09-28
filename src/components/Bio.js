import React from 'react'

import Temi from '../assets/images/temi.png'

const Bio = () => (
  <section className="bio-information" id="about">
    <img className="bio-image"src={Temi} alt="Temi" />
    <section className="bio">
      <p className="bio-paragraph">Temi Roberts is your AFAA certified Zumba and Dancehall fusion instructor who has always had a passion for dance 
      and is now offering classes with various world rhythms from African, Caribbean and hip hop music that'll keep you moving
      and melting the calories away. Get signed up today for a fun, lusty, vibrant experience.</p>
      <q className="bio-quote">My mission is to help others focus on the vast benefits of dancing while building a community of people who can share positive vibes and energy.</q>
      <p className="bio-slogan">Dancin To A Better You!</p>
    </section>
  </section>
)

export default Bio