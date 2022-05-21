import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Woman from "./Pages/Woman/Woman"
import Man from "./Pages/Man/Man"
import Kids from "./Pages/Kids/Kids"
import Error from "./Pages/Error/Error"
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/man" element={<Man/>}/>
          <Route path="/woman" element={<Woman/>}/>
          <Route path="/kids" element={<Kids/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
