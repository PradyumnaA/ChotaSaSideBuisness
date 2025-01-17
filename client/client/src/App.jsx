import { useState } from 'react';
import {GardeningIcon, Logo, MobileAppDevelopment, WebDevelopment} from './assets';
import './App.css';
import {Route,Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import axios from "axios";
axios.defaults.baseURL='http://localhost:2001'
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<IndexPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
            </Route>

        </Routes>


    );
}

export default App;
