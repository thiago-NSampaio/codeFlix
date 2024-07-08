'use client';
import InputField from '@/app/components/InputFiled';
import React from 'react';

export default function ForgotPasswordForm() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>Forgot Password</h1>
        <p className='text-sm text-gray-500'>
          Enter your email to reset your password
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='email'
          label='Email'
          type='email'
          placeholder='Enter your email'
        />
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='text-sm-semibold flex w-full justify-center space-x-2 rounded-lg bg-red-500 px-4 py-2 hover:bg-red-600 sm:w-auto'
          type='submit'
        >
          Reset Password
        </button>
      </div>
    </form>
  );
}
