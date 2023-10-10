import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="outer">
                <div className="container">
                    <div className="upper">
                        <h1>Register</h1>
                    </div>
                    <div className="lower">
                        <div className="row">
                            <i className="fa-solid fa-user" style={{ color: "#ffffff" }}></i>
                            <input
                                required
                                value={username}
                                onChange={(e) => { setUsername(e.target.value) }}
                                placeholder='Username' type="text" />
                        </div>
                        <div className="row">
                            <i className="fa-solid fa-envelope" style={{ color: "#ffffff" }}></i>
                            <input required
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                placeholder='Email' type="text" />
                        </div>
                        <div className="row">
                            <i className="fa-solid fa-lock" style={{ color: "#ffffff" }}></i>
                            <input required
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder='Password' type="password" />
                        </div>
                        <div className="row">
                            <i className="fa-solid fa-lock" style={{ color: "#ffffff" }}></i>
                            <input required
                                value={conPassword}
                                onChange={(e) => { setConPassword(e.target.value) }}
                                placeholder='Confirm Password' type="password" />
                        </div>
                        <div className="row">
                            <button className='login-btn' type="submit">Register</button>
                        </div>
                        <div className="row">
                            <div>Already a member? <Link to="/login">Login</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Signup