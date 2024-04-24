import React from 'react';

const Register = () => {
    return (
        <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-4  border-green-400'>
            <h1>Enter the details</h1>
            <form className='flex flex-col gap-3'>
            <input type='text' placeholder='Full Name'></input>
                <input type='text' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
                <button className='bg-green-600 text-white py-2 px-6'>
                        Register
                    </button>
                    <div className='bg-red-600 text-white text-sm py-1 px-3 rounded-md mt-2 w-fit'>
                        Error message
                    </div>
            </form>

        </div>
    </div>
    );
};

export default Register;