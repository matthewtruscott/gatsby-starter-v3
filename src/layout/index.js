import React from "react"
import LoadingScreen from "./LoadingScreen"
import Navigation from "./Navigation"
import PageContainer from "./PageContainer"

const Layout = ({ children: page }) => {
  return (
    <>
      <Navigation />
      {/* <LoadingScreen /> */}
      <PageContainer page={page} />
    </>
  )
}

export default Layout
