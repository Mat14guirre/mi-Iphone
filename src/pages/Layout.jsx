import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

// eslint-disable-next-line no-unused-vars, react/prop-types
const Layout=({children})=>{
    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}
export default Layout