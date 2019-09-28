import React from 'react'

import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Facebook, Twitter, YouTube} from '@material-ui/icons'

const Footer = () => (
  <AppBar className="footer-test" position="sticky" style={{background: `darkOrchid`}}>
    <Toolbar>
      {/* TODO: make section display flex footer content */}
      <section className="footer-container">
        <div>
        <Typography className='footer-info'>
          Dancin Styles 2019 | Site by: <a href="http://marquetreid.com" target="_blank" rel="noopener noreferrer">Marquet Reid (@QuetCodesFire)</a> | All Rights Reserved
        </Typography>
        </div>
        {/* TODO: Remove margin-left */}
        <div className="social-media-icons">
          <IconButton href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook className="facebook-icon" />
          </IconButton>
          <IconButton href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Twitter className="twitter-icon" />
          </IconButton>
          <IconButton href="http://youtube.com/channel/UCG2xWM0TZAH7sRBQ618mXyQ" target="_blank" rel="noopener noreferrer">
            <YouTube className="youtube-icon" />
          </IconButton>
        </div>
      </section>
    </Toolbar>
  </AppBar>
)

export default Footer