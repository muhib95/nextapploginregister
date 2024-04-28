"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const register=async(e)=>{
e.preventDefault();
console.log(name,email,pass);
try {
    
    const res=await fetch("api/register",
  {  method:"POST",
    header:{
"Content-Type":"application/json",
    },
    body:
        JSON.stringify(
            {
                name,
                email,
                pass
            }
        )
    

}
);
} catch (error) {
    
}
    }
    return (
        <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-4  border-green-400'>
            <h1>Enter the details</h1>
            <form onSubmit={(e)=>register(e)} className='flex flex-col gap-3'>
            <input onChange={(e)=>setName(e.target.value)} type='text' placeholder='Full Name'></input>
                <input onChange={(e)=>setEmail(e.target.value)} type='text' placeholder='Email'></input>
                <input onChange={(e)=>setPass(e.target.value)} type='password' placeholder='Password'></input>
                <button className='bg-green-600 text-white py-2 px-6'>
                        Register
                    </button>
                    <div className='bg-red-600 text-white text-sm py-1 px-3 rounded-md mt-2 w-fit'>
                        Error message
                    </div>
                    <Link className='flex justify-end items-center' href="/">Already have an account? <span className='underline'>Login</span></Link>
            </form>

        </div>
    </div>
    );
};

export default Register;