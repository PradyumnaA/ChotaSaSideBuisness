import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function RegisterPage() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    function registerUser(ev){
        ev.preventDefault()
        axios.post('/register',{
            name,
            email,
            password
        });
    }
    return (
        <div className="flex flex-col justify-center items-center min-h-screen py-4">
            <div className="w-full max-w-md">
                <h1 className="text-2xl text-center mb-4">Register</h1>
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={registerUser}

                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={name}
                            onChange={ev=>setName(ev.target.value)}


                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={email}
                            onChange={ev=>setEmail(ev.target.value)}

                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter the password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            value={password}
                            onChange={ev=>setPassword(ev.target.value)}



                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Register
                        </button>
                    </div>
                    <div className="text-center py-4 text-gray-500">
                        Already have an account?{" "}
                        <Link className="underline text-black" to="/login">
                            Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
