import React, { ReactNode } from 'react';

interface Props {
  type: 'button' | 'submit';
  handleClick: React.MouseEventHandler<Element>;
  children: ReactNode;
}

const SearchButton: React.FC<Props> = ({ handleClick, type, children }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className="px-6 py-4 font-bold text-black transition bg-white rounded-full shadow hover:shadow-md"
    >
      {children}
    </button>
  );
};

export default SearchButton;
