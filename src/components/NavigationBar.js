import React from 'react'

import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'

const NavigationBar = () => (
  <AppBar position="sticky" style={{background: `darkOrchid`}}>
    <Toolbar>
      <IconButton>
        <Menu />
      </IconButton>
      <Typography variant="h5" className='dancin-styles-nav-logo' style={{color: `black`}}>
        Dancin Styles Fitness
      </Typography>
    </Toolbar>
  </AppBar>
)

export default NavigationBar