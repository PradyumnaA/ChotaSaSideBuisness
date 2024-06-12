import { useState } from 'react';
import { Logo, MobileAppDevelopment, WebDevelopment } from './assets';
import './App.css';

function App() {
    return (
        <header className="p-4 flex justify-between flex-wrap">
            <div className="General">
                <a href="/" className="flex items-center gap-1 logo-with-text">
                    <img src={Logo} alt="Logo" className="logo-image"/>
                    <span className="mt-2 font-bold text-xl logo-text">Chotasi Business</span>
                </a>
            </div>
            <div className="flex mt-4 sm:mt-0 sm:ml-auto border border-gray-300 rounded-full px-4 py-2 gap-2 shadow-md shadow-gray-50 individual-postings">
                <div className="hidden sm:flex">Web Development</div>
                <div className="hidden sm:block border-gray-300 border-l"></div>
                <div className="hidden sm:flex">Mobile Application Development</div>
                <div className="hidden sm:block border-gray-300 border-l"></div>
                <div className="hidden sm:flex">Gardening Only in India</div>
                <button className="bg-primary_red text-white p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default App;
