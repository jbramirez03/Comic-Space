import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const loginTest = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    const [loginUser] = useMutation(LOGIN);



    return (
        <div>

        </div>
    )
}

export default loginTest
