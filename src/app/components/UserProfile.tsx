import React from 'react';

export const UserProfile = () => {
    return (
        <div className='flex items-center space-x-4'>
            <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
            <img src='../kids-avatar.png' alt='' width={30} height={30} />
        </div>
    );
};
