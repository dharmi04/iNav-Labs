import About from "./components/About"
import Cards from "./components/Cards"

import Header from "./components/Header"
import Nav from "./components/Nav"
import Subscribe from "./components/Subscribe"
import Newlaunch from "./components/newlaunch"

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
    </div>
      
    </div>
  )
}

export default App
