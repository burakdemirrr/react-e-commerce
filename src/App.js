import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Woman from "./Pages/Woman/Woman"
import Man from "./Pages/Man/Man"
import Kids from "./Pages/Kids/Kids"
import Error from "./Pages/Error/Error"
import Navbar from "./components/Navbar"
import gsap from 'gsap';
import Footer from './components/Footer';
function App() {
  const tl=gsap.timeline();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar timeline={tl}/>
       
        <Routes>
          <Route path="/" element={<Home timeline={tl} />}/>
          <Route path="/man" element={<Man timeline={tl} />}/>
          <Route path="/woman" element={<Woman timeline={tl}/>}/>
          <Route path="/kids" element={<Kids timeline={tl}/>}/>
          <Route path="*" element={<Error timeline={tl}/>}/>
        </Routes>
         <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
