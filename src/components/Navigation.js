import React from 'react'

import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'

const Navigation = () => (
  <AppBar position="sticky" style={{background: `darkOrchid`, width: `80%`, marginLeft: `10vw`}}>
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

export default Navigation