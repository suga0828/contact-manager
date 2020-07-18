import React from 'react';

interface TextInputGroupProps {
 label: string;
 name: string;
 value: string;
 type?: string;
 placeholder?: string;
 onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
 error?: string;
}

const TextInputGroup = ({label, name, value, type = 'text', placeholder, onChange, error }: TextInputGroupProps) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>{label}</label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight mb-2 focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      { error && <small className="text-red-500 text-xs italic">{error}</small> }
    </div>
  )
}

export default TextInputGroup;
