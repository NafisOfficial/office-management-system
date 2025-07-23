import Image from 'next/image';
import React from 'react';
import notFound from '../public/error.svg';

const NotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen text-4xl'>
            <Image src={notFound} alt="Not Found" />
        </div>
    );
};

export default NotFound;