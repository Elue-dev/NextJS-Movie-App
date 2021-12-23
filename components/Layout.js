import React from 'react'
import Meta from './Meta'
import Nav from './Nav'

function Layout({children}) {
    return (
        <>
            <Meta />
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
