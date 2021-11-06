import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const LoginTest = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [loginUser] = useMutation(LOGIN);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await loginUser({
                variables: { ...userFormData }
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            email: '',
            password: '',
        });
    };


    return (
        <div>
            {Auth.loggedIn() ? <button onClick={Auth.logout}>logout</button> : 'no'}

            <form action="submit" onSubmit={handleFormSubmit}>
                <input type="text"
                    placeholder='email'
                    name='email'
                    value={userFormData.email}
                    onChange={handleInputChange}
                />
                <input type="password"
                    placeholder='password'
                    name='password'
                    value={userFormData.password}
                    onChange={handleInputChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginTest
