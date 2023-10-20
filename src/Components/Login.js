import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = async (e) => {
        e.preventDefault();
        if (username !== '' && password !== '') {
            try {
                const response = await axios.post('http://localhost:8001/login', { username, password });
                if (response.data.status === 'success') {
                    alert("Login Successful");
                } else {
                    alert("Login failed !! Wrong Credentials ");
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 400) {
                        alert("Login failed !! Wrong Credentials");
                    } else if (error.response.status === 500) {
                        alert("Internal server error. Please try again later.");
                    }
                } else {
                    alert("Network error. Please check your internet connection.");
                }
            }
        } else {
            alert('Username and Password Required');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="outer">
                <div className="container">
                    <div className="upper">
                        <h1>Login</h1>
                    </div>
                    <div className="lower">
                        <div className="row">
                            <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
                            <input value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Username' type="text" />
                        </div>
                        <div className="row">
                            <i className="fa-solid fa-lock" style={{ color: "#ffffff" }}></i>
                            <input value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder='Password' type="password" />
                        </div>
                        <div className="row">
                            <a href="/">Forget Password?</a>
                        </div>
                        <div className="row">
                            <button className='login-btn' type="submit">Login</button>
                        </div>
                        <div className="row">
                            <div>Not a member? <Link to="/signup">Signup Now</Link></div>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    )
}

export default Login