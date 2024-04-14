import React from 'react';

function PrimaryButton({ label, eventname, bgcolor = 'transparent', textcolor, type }) {
  return (
    <button
      type={type}
      className="rounded-full mt-3 bg-transparent border border-white text-white px-6 py-2 font-futura text-xl font-normal hover:bg-white hover:text-black transition duration-300"
      style={{ backgroundColor: bgcolor, color: textcolor }}
      onClick={eventname}
    >
      {label}
    </button>
  );
}

export default PrimaryButton;