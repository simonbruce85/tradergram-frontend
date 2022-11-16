import "./App.css";
import Navbar from "./components/Navbar";
import Backimage from "./assets/bg.png";
import Backimage1 from "./assets/bg1.png";
import Home from "./components/Home";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Fullpage>
        <FullpageNavigation itemStyle={{ backgroundColor: "white" }} />
        <FullPageSections>
          <FullpageSection
            className=" w-full min-h-screen bg-cover bg-fixed "
            style={{ backgroundImage: `url(${Backimage1})` }}
          >
            <Navbar />
            <Home />
          </FullpageSection>
          <FullpageSection
            className=" w-full min-h-screen bg-cover bg-fixed "
            style={{ backgroundImage: `url(${Backimage})` }}
          >
            <Navbar />
            <Contact />
          </FullpageSection>
          <FullpageSection
            className=" w-full min-h-screen bg-cover bg-fixed "
            style={{ backgroundImage: `url(${Backimage})` }}
          >
            <Navbar />
            <Contact />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default App;
