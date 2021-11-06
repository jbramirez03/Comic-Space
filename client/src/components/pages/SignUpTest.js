import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignUpTest = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });


    return (
        <div>
            <form action="submit">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="email" />
                <input type="password" />
            </form>
        </div>
    )
}

export default SignUpTest
