import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import About from "./pages/About"
import Landing from "./pages/Landing"
import News from "./pages/News"
import GlobalStyle from "./GlobalStyle"


const App = () => {

  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Landing />
      <News />
      <About />
      <Footer />
    </div>
  )
}

export default App