import React from 'react';
import InputField from './InputFiled';

type AuthFormProps = {
  formType: 'login' | 'register';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function AuthForm({ formType, onSubmit }: AuthFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
    >
      <div className='flex flex-col items-center space-y-4'>
        <h1 className='text-3xl font-bold'>
          {formType == 'login' ? 'Login' : 'Register'}
        </h1>
        <p className='text-sm text-gray-500'>
          {formType == 'login' ? 'Already have an account?' : 'New to the app?'}{' '}
          {formType == 'login' ? (
            <a href='#' className='text-red-500'>
              Login
            </a>
          ) : (
            <a href='#' className='text-red-500'>
              Register
            </a>
          )}
        </p>
      </div>
      <div className='mt-8 flex flex-col space-y-4'>
        <InputField
          id='email'
          label='Email'
          type='email'
          placeholder='Enter your email'
        />
        <InputField
          id='password'
          label='Password'
          type='password'
          placeholder='Enter your password'
        />
        {formType == 'register' && (
          <InputField
            id='ConfirmPassword'
            label='Comfirm Password'
            type='password'
            placeholder='Confirm your password'
          />
        )}
      </div>
      <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
        <button
          className='text-sm-semibold flex w-full justify-center space-x-2 rounded-lg bg-red-500 px-4 py-2 hover:bg-red-600 sm:w-auto'
          type='submit'
        >
          Register
        </button>
      </div>
    </form>
  );
}
