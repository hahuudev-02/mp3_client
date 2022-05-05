import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.scss';
import SideBar from "./compoments/sideBar/SideBar";
import Header from "./compoments/header/Header";
import Container from "./compoments/container/Container.js";
import TabBar from "./compoments/tabBar/TabBar";
import Login from './compoments/login/Login'
import Register from './compoments/register/Register'

function App() {
    function App() {
        return (
            <div className="App">
                    <SideBar />

                    <div className="App__Container">
                        <Header />

                        <Routes>
                            <Route path="/" element={<Container />} />
                        </Routes>
                    </div>
                    
                    <TabBar />
            </div>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
     
    );
}

export default App;
