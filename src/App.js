import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Landing from "./pages/Landing"
import News from "./pages/News"
import GlobalStyle from "./GlobalStyle"
import Services from "./pages/Services"


const App = () => {

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Landing />
      <Services />
      <News />
      <About />
      <Footer />
    </div>
  )
}

export default App