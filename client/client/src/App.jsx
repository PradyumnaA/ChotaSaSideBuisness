import { useState } from 'react';
import { Logo } from './assets';
import './App.css';

function App() {
    return (
        <header className="p-4">
            <div className="General">
                <a href="" className="flex items-center gap-1 logo-with-text">
                    <img src={Logo} alt="Logo" className="logo-image"/>
                    <span className="mt-2 font-bold text-xl logo-text">Chotasi Business</span>
                </a>
            </div>
        </header>
    );
}

export default App;
