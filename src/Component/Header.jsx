import React from 'react';

function Header() {
    return (
        <div className='flex flex-row w-full h-fit align-items justify-center bg-black text-white p-2 text-2xl lobster-regular'>
            <div className="flex inline-flex gap-4 w-full h-fit items-center justify-start">
                <a href="/" className="grid w-fit justify-center items-center">
                    <h1 className="text-white z-10 text-4xl lobster-regular">
                        <span className="text-yellow-400">Sync</span>
                        <span className="text-white">Hub</span>
                    </h1>
                </a>
                <h4>A dew computing platform</h4>
            </div>
            <div className="flex lg:flex-row sm:flex-col w-fit lg:gap-10 sm:gap-2 mr-8">
                <a className='hover:text-amber-300 w-fit h-fit whitespace-nowrap' href="/server-config">Server Config</a>
                <a className='hover:text-amber-300 w-fit h-fit' href="/login">Login</a>
                <a className='hover:text-amber-300 w-fit h-fit' href="/register">Register</a>
                <a className='hover:text-amber-300 w-fit h-fit' href="/verify">Verify</a>
                <a className='hover:text-amber-300 w-fit h-fit whitespace-nowrap' href="/forgot-password">Forgot Password</a>
            </div>
        </div>
    );
}

export default Header;