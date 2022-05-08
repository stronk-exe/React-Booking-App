import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Hotel from "./pages/Hotel";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<List />}/>
        <Route path="/hotels/:id" element={<Hotel />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
