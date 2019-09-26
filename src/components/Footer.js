import React from 'react'

import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Facebook, Twitter, YouTube} from '@material-ui/icons'

const Footer = () => (
  <AppBar position="sticky" style={{background: `darkOrchid`}}>
    <Toolbar>
      {/* TODO: make section display flex footer content */}
      <section className="footer-container" style={{display: `flex`, justifyContent: `spaceAround`, alignItems: `center`}}>
        <Typography className='footer-info' >
          Dancin Styles 2019 | Site by: <a href="http://marquetreid.com" target="_blank" rel="noopener noreferrer">Marquet Reid</a> | All Rights Reserved
        </Typography>
        <div className="social-media-icons" style={{marginLeft: `35vw`}}>
          <IconButton>
          <a href="http://facebook.com/"><Facebook /></a>
          </IconButton>
          <IconButton>
          <a href="http://twitter.com/"><Twitter /></a>
          </IconButton>
          <IconButton>
            <a href="http://youtube.com/channel/UCG2xWM0TZAH7sRBQ618mXyQ"><YouTube /></a>
          </IconButton>
        </div>
      </section>
    </Toolbar>
  </AppBar>
)

export default Footer