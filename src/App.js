import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Land from "./land";
import Test from "./test"
function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
         <Route path="/"element={<Land/>}/>
         <Route path="/test"  element={<Test/>}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
