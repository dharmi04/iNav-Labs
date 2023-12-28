import About from "./components/About"
import Cards from "./components/Cards"

import Nav from "./components/Nav"
import Subscribe from "./components/Subscribe"
import Newlaunch from "./components/Newlaunch"
import Footer from "./components/Footer"
import Contactdetails from "./components/Contactdetails"

function App() {
  

  return (
    <div className="bg-black">
    <Nav />
    <div className="">

    {/* <Header /> */}
    <About />
    <Newlaunch />
    <Cards />
    <Subscribe id="#subscribe"  />
    <Contactdetails />
    <Footer />
    </div>
      
    </div>
  )
}

export default App
