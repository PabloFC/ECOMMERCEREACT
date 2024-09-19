import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navigation from "./Navigation"
import SecondaryMenu from "./SecondaryMenu"

const Layout = () => {
  return (
    <div>
        <SecondaryMenu/>
        <Navigation/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default Layout
