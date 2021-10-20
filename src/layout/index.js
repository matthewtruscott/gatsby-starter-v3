import React from "react"
import LoadingScreen from "./LoadingScreen"
import PageContainer from "./PageContainer"

const Layout = ({ children: page }) => {
  return (
    <>
      <LoadingScreen />
      <PageContainer page={page} />
    </>
  )
}

export default Layout
