import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import MainPage from "./components/pages/main/MainPage";
import ItemPage from "./components/pages/item/ItemPage";
import LoginPage from "./components/pages/login/LoginPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/item' element={<ItemPage />} />
        <Route path='/item/:id' element={<ItemPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
