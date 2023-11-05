import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Chat from './components/Chat';
import Home from './components/Home';
import SelectCompany from './components/SelectCompany';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App bg-primary-600"> {/* Apply the custom color class here */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/selec-company" element={<SelectCompany/>}/>
          <Route path="/chatBot" element={<Chat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
