import React from 'react'
import {Helmet} from "react-helmet";


function MainSite() {
  return (
    <>
     <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Main Page</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    </>
  )
}

export default MainSite