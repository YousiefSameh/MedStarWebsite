import About from "./components/About"
import Blogs from "./components/Blogs"
import Brands from "./components/Brands"
import Call from "./components/Call"
import Contact from "./components/Contact"
import Doctors from "./components/Doctors"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Help from "./components/Help"
import Info from "./components/Info"
import Newsletter from "./components/Newsletter"
import PriceList from "./components/PriceList"
import Services from "./components/Services"

const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Info />
        <Help />
        <Call />
        <Services />
        <PriceList />
        <Brands />
        <Doctors />
        <Blogs />
        <Contact />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}

export default App