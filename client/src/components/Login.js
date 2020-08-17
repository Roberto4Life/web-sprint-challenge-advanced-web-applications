import React, { useState } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import {useHistory} from 'react-router-dom';

function Login() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
            .post('/api/login', user)
            .then(res => {
                console.log('login', res)
                setIsLoading(false);
                localStorage.setItem("authToken", res.data.payload);
                history.push("/colors");
            })
            .catch(error => {
                setIsLoading(false)
                console.log('Error', error)
            })
        setUser({})
    }

    return (
        <div >
            {isLoading ? (
                <h2>Loading</h2>
            ) : (
                    <form onSubmit={handleLogin}>
                        <label>
                            Username:
                        <input
                                type="text"
                                name="username"
                                onChange={event => handleChange(event)}
                                value={user.username}
                                placeholder='Username'
                            />
                        </label>
                        <br />
                        <label>
                            Password:
                        <input
                                type='password'
                                name="password"
                                onChange={event => handleChange(event)}
                                value={user.password}
                                placeholder='Password'
                            />
                        </label>
                        <br />
                        <button>Submit!</button>
                    </form>
                )}
        </div>
    );
}

export default Login;