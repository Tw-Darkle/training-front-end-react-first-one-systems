import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About_us/About"
import Partner from "./Pages/Partners/Partner"
import Client from "./Pages/Clients/Client"
import Career from "./Pages/Career/Career"
import Contact from "./Pages/Contact_us/Contact"

const AppRoutes = () => {
    return(
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/solutions&services" element={<Home/>} />
        <Route path="/partner" element={<Partner/>} />
        <Route path="/client" element={<Client/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<Contact/>} />
       </Routes> 
    )
} 
export default AppRoutes