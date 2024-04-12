import React from 'react';
import './App.css'
import {BrowserRouter,  Route, Routes} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Plants} from "./components/Plants/Plants";
import {AddPlants} from "./components/AddPlants/AddPlants";
import {Search} from "./components/Search/Search";
import {Header} from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/planter" element={<Plants/>}/>
                <Route path="/leggtil" element={<AddPlants/>}/>
                <Route path="/finn" element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
