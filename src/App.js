import logo from './logo.svg';
import React, { useState,useEffect } from 'react';
import './App.css';
import { MainDisplay } from './Pages/MainPage.js';
import { SearchBar } from './Pages/SearchPage.js';
import Photo from "./Assets/Photos";
import About from './Pages/About.js';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { AddMath } from './Pages/AddFunc.js';
import { ElementMaker } from './Components/AddElement.js';
function App() {
    let [mathConcepts, setMathConcepts] = useState([]);
    useEffect(() => {fetch('./math.json').then(response=>response.json()).then(data=>setMathConcepts(data.maths)).catch(e=>console.log(e))}, []);
    function NavBar() {
        let [visible, setVisible] = useState("0");
        function handleNav(e) {
            setVisible(a => { if (a === "0") { return '100'; } else { return "0"; } });
        }
        return (<div onMouseOver={handleNav} onMouseOut={handleNav} id="child" style={{
            top: "-22px", zIndex:"1000",
            textAlign: "left", color: "black", opacity: visible, backgroundColor: "grey", height: "16.1%", width: "100%", position: "fixed"
        }}><nav style={{backgroundColor:"blue"}}><img src={Photo[0][1]} width="auto" height="auto" alt={Photo[0][0]} />
            <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="add">Add Concept</Link></li>
            </ul>
        </nav><Outlet/></div>);
    }
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route index  path="/"element={<MainDisplay/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/search" element={<SearchBar />} />
                    <Route path="/add" element={<AddMath />} />
                    {mathConcepts.map(a => <Route path={a.path} key={a.id} element={<ElementMaker jsonElement={a.element} json={a}/>} />)}
                   </Routes>
                </ BrowserRouter>
          </div>
  );
}

export default App;
