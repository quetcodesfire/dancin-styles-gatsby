import React from 'react'

const ContentContainer = ({children}) => (
  <section className="content-container" style={{width: `90%`}}>
    {children}
  </section>
)

export default ContentContainer