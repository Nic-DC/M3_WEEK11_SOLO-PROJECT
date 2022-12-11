// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import FavoritesPage from "./components/FavoritesPage";

import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

  // return (
  //   <BrowserRouter>
  //     <div className="">
  //       <Routes>
  //         <Route path="/" element={<Homepage />} />
  //         <Route path="/favorites" element={<FavoritesPage />} />
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;
