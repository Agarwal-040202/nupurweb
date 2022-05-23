import { BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Profile/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Education from "./components/Education/Education";
import Testimonial from "./components/Testimonial/Testimonial";
import MainFooter from "./components/Footer/MainFooter";
import "./components/Page/Home.css";
import Paper from "./components/Paper/Paper";
import Events from "./components/Events/Events";
import BacktotopButton from "./components/BackToTopButton/BacktotopButton";
import Viewer from "./components/Viewers/Viewer";
import Book from "./components/Book/Book";

function App() {
  return (
    <div>
      <Router>
        <div className="home-container">
          <Menu />
          <Profile />
          <Footer />
        </div>
        <AboutMe />
        <div>
          <Education />
          <Paper />
          <Book />
          <Events />

          <ContactMe />
          {/* <Viewer/> */}
        </div>
        <Testimonial />
        <MainFooter />
        <main>
          <Routes></Routes>
        </main>
      </Router>
      <BacktotopButton />
    </div>
  );
}

export default App;
