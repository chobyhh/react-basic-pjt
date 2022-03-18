import './App.css';
import Days from "./component/Days";
import Title from "./component/Title";
import Detail from "./component/Detail";
import { useState } from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
           <Routes>
            <Route exact path="/" element={<Title />}></Route>
            <Route path="/day/:id" element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>    
  );
}

export default App;
