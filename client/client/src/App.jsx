import { useState } from 'react';
import {GardeningIcon, Logo, MobileAppDevelopment, WebDevelopment} from './assets';
import './App.css';
import {Route,Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";

function App() {
    return (
        <Routes>
            <Route index element={<IndexPage/>}/>
{/*some comment*/}
        </Routes>


    );
}

export default App;
