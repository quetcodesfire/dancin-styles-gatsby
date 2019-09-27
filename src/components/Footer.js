import React from 'react'

import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Facebook, Twitter, YouTube} from '@material-ui/icons'

const Footer = () => (
  <AppBar position="sticky" style={{background: `darkOrchid`}}>
    <Toolbar>
      {/* TODO: make section display flex footer content */}
      <section className="footer-container" style={{display: `flex`, flexDirection: `row`, justifyContent: `center`, alignItems: `center`, color: `#000`}}>
        <div>
        <Typography className='footer-info'>
          Dancin Styles 2019 | Site by: <a href="http://marquetreid.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: `none`, color: `#000`}}>Marquet Reid (@QuetCodesFire)</a> | All Rights Reserved
        </Typography>
        </div>
        {/* TODO: Remove margin-left */}
        <div className="social-media-icons" style={{marginLeft: `50vw`}}>
          <IconButton href="http://facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook style={{color: `#000`}} />
          </IconButton>
          <IconButton href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
            <Twitter style={{color: `#000`}} />
          </IconButton>
          <IconButton href="http://youtube.com/channel/UCG2xWM0TZAH7sRBQ618mXyQ" target="_blank" rel="noopener noreferrer">
            <YouTube style={{color: `#000`}} />
          </IconButton>
        </div>
      </section>
    </Toolbar>
  </AppBar>
)

export default Footer