import About from "./components/About"
import Cards from "./components/Cards"

import Header from "./components/Header"
import Nav from "./components/Nav"
import Subscribe from "./components/Subscribe"


function App() {
  

  return (
    <div className="bg-black">
    <Nav />
    <div className="">

    {/* <Header /> */}
    <About />
    
    <Cards />
    <Subscribe id="#subscribe"  />
    </div>
      
    </div>
  )
}

export default App
