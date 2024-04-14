import React from 'react';

function InputField({ label, name, type, placeholder, value, onChange }) {
  const handleInputChange = (e) => {
    // Call the onChange function passed from the parent with the new value
    onChange(e.target.value);
  };

  return (
    <div className="form-field-container mb-4">

      <div className="relative mt-1">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          className="py-2 pl-10 pr-10 leading-5 rounded-full border border-gray-600 bg-white text-gray-700 placeholder-teal-dark focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full text-2xl font-futura text-left placeholder-blue-800::placeholder placeholder-opacity-100 placeholder-Futura"
          style={{ width: '480px', height: '50px' }}
        />
      </div>
    </div>
  );
}

export default InputField;
