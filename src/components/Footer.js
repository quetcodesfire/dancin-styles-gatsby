import React from 'react'

import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Facebook, Twitter, YouTube} from '@material-ui/icons'

const Footer = () => (
  <AppBar position="sticky" style={{background: `darkOrchid`, width: `80%`, marginLeft: `10vw`}}>
    <Toolbar>
      {/* TODO: make section display flex footer content */}
      <section className="footer-container" style={{display: `flex`, justifyContent: `spaceAround`, alignItems: `center`}}>
        <Typography className='footer-info' >
          Dancin Styles 2019 | Site by: <a href="http://marquetreid.com" target="_blank" rel="noopener noreferrer">Marquet Reid</a> | All Rights Reserved
        </Typography>
        <div className="social-media-icons" style={{marginLeft: `35vw`}}>
          <IconButton>
            <Facebook />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <YouTube />
          </IconButton>
        </div>
      </section>
    </Toolbar>
  </AppBar>
)

export default Footer