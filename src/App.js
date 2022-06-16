import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ProviderHandle } from 'store';

import './App.scss';
import SideBar from './page/sideBar/SideBar';
import Header from './page/header/Header';
import Footer from './page/Footer/Footer';
import Container from './page/container/Container.js';
import TabBar from './page/tabBar/TabBar';
import Login from './page/login/Login';
import Register from './page/register/Register';
import MyMusic from './page/myMusic/MyMusic';

function Apps() {
    return (
        <div className="App">
            <ProviderHandle>
                <SideBar />

                <div className="App__Container">
                    <Header />

                    <Routes>
                        <Route path="/" element={<Container />} />
                        <Route path="/my-music" element={<MyMusic />} />
                    </Routes>

                    <Footer />
                </div>

                <TabBar />
            </ProviderHandle>
        </div>
    );
}
function App() {
    return (
        <Routes>
            <Route path="*" element={<Apps />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
