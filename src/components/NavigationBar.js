import React from 'react'
import {Link} from 'gatsby'

import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import {Menu} from '@material-ui/icons'

const NavigationBar = () => {
  function toggleNavDropdown () {
    const links = document.getElementsByClassName('menu-bar-links')[0]
    if (links.style.display === 'block') {
      links.style.display = "none"
    } else {
      links.style.display = "block"
    }
  }

  return (
    <AppBar position="sticky" style={{background: `darkOrchid`}}>
      <Toolbar>
        <IconButton onClick={toggleNavDropdown}>
          <Menu />
        </IconButton>
        <Typography variant="h5" className='dancin-styles-nav-logo' style={{color: `black`}}>
          Dancin Styles Fitness
        </Typography>
      </Toolbar>
      <div className="menu-bar-links" onClick={toggleNavDropdown} style={{display: `none`, color: `#000`, padding: `14px 16px`, textDecoration: `none`, position: `relative`, background: `darkOrchid`}}>
        <Link to="#" style={{display: `block`, color: `#000`, padding: `14px 16px`, textDecoration: `none`, position: `relative`, background: `darkOrchid`}}>HOME</Link>
        <Link to="#about" style={{display: `block`, color: `#000`, padding: `14px 16px`, textDecoration: `none`, position: `relative`, background: `darkOrchid`}}>ABOUT</Link>
        <Link to="#classes" style={{display: `block`, color: `#000`, padding: `14px 16px`, textDecoration: `none`, position: `relative`, background: `darkOrchid`}}>CLASSES</Link>
        <a href="http://www.ladystyleshairdesign.com" target="_blank" rel="noopener noreferrer" style={{display: `block`, color: `#000`, padding: `14px 16px`, textDecoration: `none`, position: `relative`, background: `darkOrchid`}}>LADY STYLES HAIR</a>
      </div>
    </AppBar>
  )
}

export default NavigationBar