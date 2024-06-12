import {GardeningIcon, Logo, MobileAppDevelopment, WebDevelopment} from "../assets/index.js";

export default function IndexPage() {
    return(
        <>
            <header className="p-4 flex justify-between flex-wrap">
                <div className="General">
                    <a href="/" className="flex items-center gap-1 logo-with-text">
                        <img src={Logo} alt="Logo" className="logo-image"/>
                        <span className="mt-2 font-bold text-xl logo-text">Chotasi Business</span>
                    </a>
                </div>
                <div
                    className="flex mt-4 sm:mt-0 sm:ml-auto border border-gray-300 rounded-full px-4 py-2 gap-2 shadow-md shadow-gray-50 individual-postings">
                    <div className="hidden sm:flex">
                        <img src={WebDevelopment} alt="Logo" className="logo-image"/>
                        Web Development
                    </div>
                    <div className="hidden sm:block border-gray-300 border-l"></div>
                    <div className="hidden sm:flex">
                        <img src={MobileAppDevelopment} alt="Logo" className="logo-image"/>
                        Mobile Application Development
                    </div>
                    <div className="hidden sm:block border-gray-300 border-l"></div>
                    <div className="hidden sm:flex">
                        <img src={GardeningIcon} alt="Logo" className="logo-image"/>
                        Gardening

                    </div>
                    <button className="bg-primary_red text-white p-2 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                    <div
                        className="flex mt-4 sm:mt-0 sm:ml-auto border border-gray-300 rounded-full px-4 py-2 gap-2 shadow-md shadow-gray-50 individual-profile">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                             className="size-5">
                            <path fillRule="evenodd"
                                  d="M2 3.75A.75.75 0 0 1 2.75 3h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.166a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
                                  clipRule="evenodd"/>
                        </svg>
                        <div className="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="size-5">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}