import React from 'react'

import {Card, CardContent, IconButton, Typography} from '@material-ui/core'
import {LocationOn, Schedule} from '@material-ui/icons/';

import ZumbaLogo from '../assets/images/zumba-logo.jpg'
import PurpleLights from '../assets/images/purple-lights.jpg'

const Info = () => (
  // Possibly move background to the outter most div
  <div className="dancin-styles-info">
    {/* TODO: Move background styles to sass file */}
    <section className="call-to-action" style={{background: `url(${PurpleLights}) no-repeat center center`, backgroundSize: `cover`}}>

      {/* TODO: Move background to scss */}
      <Card className="zumba" style={{background: `#000`}}>
        <CardContent>
          <img src={ZumbaLogo} alt="zumba logo" className="zumba-logo" />
        </CardContent>
      </Card>

      {/* TODO: Move background and color to scss */}
      <Card className="location" style={{background: `#000`, color: `#fff`}}>
        <CardContent>
          {/* <Typography className="location-text" variant="h3">Location</Typography> */}
          <Typography className="location-text" variant="h3">Zumba Classes</Typography>
          {/* <IconButton>
            <LocationOn className="location-icon" style={{ fontSize: `48px`}}/>
          </IconButton> */}
          <Typography className="location-text"><br /><br />North Laurel Community Center<br /> 9411 Whiskey Bottom Road <br /> Laurel, MD 20723<br /><br /></Typography>
          <Typography className="location-text">Saturday's: 7:30pm - 8:30pm</Typography>
        </CardContent>
      </Card>

      {/* TODO: Move background and color to scss */}
      <Card className="hours" style={{background: `#000`, color: `#fff`}}>
        <CardContent>
          {/* TODO: Remove margins */}
          {/* <Typography className="hours-text" variant="h3">Hours</Typography> */}
          <Typography className="hours-text" variant="h3">Dance Hall Fusion</Typography>
          {/* <IconButton>
            <Schedule className="hours-icon" style={{fontSize: `48px`}}/>
          </IconButton> */}
          <Typography className="hours-text"><br /><br />Extravadance(ECDC)<br /> 44 Washington Blvd <br /> Laurel, MD 20707<br /><br /></Typography>
          <Typography className="hours-text">Saturdays: 10:30AM - 11:30AM</Typography>
          <Typography className="hours-text"><br />Look for a dancehall fusion pop up class in your area!</Typography>
        </CardContent>
      </Card>

      
    </section>
  </div>
)

export default Info