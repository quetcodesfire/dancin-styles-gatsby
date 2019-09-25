import React from 'react'

import {Card, CardContent, IconButton, Typography} from '@material-ui/core'
import {LocationOn, Schedule} from '@material-ui/icons/';

// import zumbaLogo from '../images/zumba-logo.jpg'

const Info = () => (
  <>
  <section className="call-to-action" style={{display: `flex`, justifyContent: `spaceAround`, background: `#000`}}>
    <Card className="location" style={{background: `darkOrchid`, width: `30%`, height: `300px`, margin: `2vh 3vw`, color: `#fff`}}>
      <CardContent>
        <Typography variant="h3" style={{textAlign: `center`}}>Location</Typography>
        <IconButton style={{padding: `0 auto`}}>
          <LocationOn style={{textAlign: `center` }}/>
        </IconButton>
        <Typography style={{textAlign: `center`}}>Extravadance, 44 Washington Blvd, Laurel, MD 20707</Typography>
      </CardContent>
    </Card>

    <Card className="location" style={{background: `darkOrchid`, width: `30%`, height: `300px`, margin: `2vh 3vw`, color: `#fff`}}>
      <CardContent>
        <Typography variant="h3" style={{textAlign: `center`}}>Hours</Typography>
        <IconButton style={{padding: `0 auto`}}>
          <Schedule style={{textAlign: `center` }}/>
        </IconButton>
        <Typography style={{textAlign: `center`}}>Saturdays: 10:30AM - 11:30AM</Typography>
        <Typography style={{textAlign: `center`}}>Dancehall Fusion every first Saturday:</Typography>
        <Typography style={{textAlign: `center`}}>10:30AM - 12:30PM</Typography>
      </CardContent>
    </Card>

    <Card className="location" style={{background: `darkOrchid`, width: `30%`, height: `300px`, margin: `2vh 3vw`}}>
      <CardContent>
        <Typography variant="h3" style={{textAlign: `center`}}>Location</Typography>
        <IconButton style={{padding: `0 auto`}}>
          <LocationOn style={{textAlign: `center` }}/>
        </IconButton>
        <Typography style={{textAlign: `center`}}>Extravadance, 44 Washington Blvd, Laurel, MD 20707</Typography>
      </CardContent>
    </Card>
  </section>
  </>
)

export default Info