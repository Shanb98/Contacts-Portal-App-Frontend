function InputField({ label, name, type, placeholder }) {
  return (
    <div className="form-field-container mb-4">
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={label}
          className="py-2 pl-10 pr-10 leading-5 rounded-full border border-gray-600 bg-white text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full  text-2xl font-normal text-left text-blue-800 placeholder-blue-800::placeholder placeholder-opacity-100 placeholder-FuturaMdBT"
          style={{ width: "480px" ,height: "50px"}}
        />
      </div>
    </div>
  );
}

export default InputField;
