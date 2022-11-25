import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
             })
            .catch(err => console.log(err));
    }

    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-500 my-1'>{error.statusText || error.message}</p>
            <h4 className="text-2xl"> Please <button className='underline italic font-bold' onClick={handleLogOut}>Sign out</button> and log in again</h4>
        </div>
    );
};

export default DisplayError;