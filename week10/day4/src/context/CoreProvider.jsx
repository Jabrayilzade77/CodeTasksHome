import React from 'react'
import MainProvider from './MainProvider'
import WishlistProvider from './WishlistProvider'

function CoreProvider({children}) {
  return (
    <div>
        <MainProvider>
            <WishlistProvider>
            {children}
            </WishlistProvider>
        </MainProvider>
      
    </div>
  )
}

export default CoreProvider