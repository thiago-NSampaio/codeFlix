import React from 'react';

type InputFieldProps = {
  id: string;
  type: string;
  label: string;
  placeholder: string;
};

export default function InputField({
  id,
  type,
  label,
  placeholder,
}: InputFieldProps) {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={id} className='text-sm font-semibold text-gray-500'>
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className='rounded-lg border-gray-600 bg-gray-700 px-4 py-2 font-medium focus:border-transparent focus:ring-2 focus:ring-red-500'
      />
    </div>
  );
}
