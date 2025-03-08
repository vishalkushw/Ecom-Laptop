import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import TopHeader from './TopHeader'
import FooterTop from './FooterTop'

const Layout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Outlet />
      <FooterTop />
      <Footer />

    </>
  )
}

export default Layout