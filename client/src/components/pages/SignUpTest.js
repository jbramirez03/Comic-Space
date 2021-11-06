import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignUpTest = () => {
    const [userFormData, setUserFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const [addUser] = useMutation(ADD_USER);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });

            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        });
    }

    return (
        <div>
            <form action="submit" onSubmit={handleFormSubmit}>
                <input type="text"
                    placeholder='first name..'
                    name='firstName'
                    onChange={handleInputChange}
                    value={userFormData.firstName}
                    required />
                <input type="text"
                    placeholder='last name..'
                    name='lastName'
                    onChange={handleInputChange}
                    value={userFormData.lastName}
                />
                <input type="email"
                    placeholder='email...'
                    name='email'
                    onChange={handleInputChange}
                    value={userFormData.email}
                />
                <input type="password"
                    placeholder='password...'
                    name='password'
                    onChange={handleInputChange}
                    value={userFormData.password}
                />
                <button>Signup</button>
            </form>
        </div>
    )
}

export default SignUpTest
