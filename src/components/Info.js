import React from 'react'

import {Card, CardContent, IconButton, Typography} from '@material-ui/core'
import {LocationOn, Schedule} from '@material-ui/icons/';

import ZumbaLogo from '../images/zumba-logo.jpg'
import PurpleLights from '../images/purple-lights.jpg'
// import PurpleTriangles from '../images/purple-tri2.jpg'

const Info = () => (
  <div className="dancin-styles-info" >
    {/* <h2 style={{textAlign: `center`, color: `#fff`}}>More Info</h2> */}
  <section className="call-to-action" style={{display: `flex`, justifyContent: `spaceAround`, alignItems: `center`, background: `url(${PurpleLights}) no-repeat center center`, backgroundSize: `cover`, height: `50vh`}}>
    <Card className="location" style={{background: `#000`, width: `30%`, height: `300px`, margin: `2vh 3vw`, color: `#fff`}}>
      <CardContent>
        <Typography variant="h3" style={{textAlign: `center`}}>Location</Typography>
        <IconButton>
          {/* TODO: Remove margins */}
          <LocationOn style={{marginLeft: `10vw`, color: `#fff`, fontSize: `48px`}}/>
        </IconButton>
        <Typography style={{textAlign: `center`}}>Extravadance, 44 Washington Blvd, Laurel, MD 20707</Typography>
      </CardContent>
    </Card>

    <Card className="location" style={{background: `#000`, width: `30%`, height: `300px`, margin: `2vh 3vw`, color: `#fff`}}>
      <CardContent>
        {/* TODO: Remove margins */}
        <Typography variant="h3" style={{textAlign: `center`}}>Hours</Typography>
        <IconButton>
          <Schedule style={{marginLeft: `10vw`, color: `#fff`, fontSize: `48px`}}/>
        </IconButton>
        <Typography style={{textAlign: `center`}}>Saturdays: 10:30AM - 11:30AM</Typography>
        <Typography style={{textAlign: `center`}}>Dancehall Fusion every first Saturday:</Typography>
        <Typography style={{textAlign: `center`}}>10:30AM - 12:30PM</Typography>
      </CardContent>
    </Card>

    <Card className="location" style={{background: `#000`, width: `30%`, height: `300px`, margin: `2vh 3vw`}}>
      <CardContent>
        <img src={ZumbaLogo} alt="zumba logo" style={{width: `100%`, marginTop: `3vh`}}/>
      </CardContent>
    </Card>
  </section>
  </div>
)

export default Info