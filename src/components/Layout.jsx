import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>

        </>
    )
}

export default Layout