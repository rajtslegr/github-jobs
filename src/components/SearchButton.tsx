import React, { ReactNode } from 'react';

interface Props {
  type: 'button' | 'submit';
  handleClick: React.MouseEventHandler<Element>;
  children: ReactNode;
  handleDisabled?: boolean;
}

const SearchButton: React.FC<Props> = ({ handleClick, handleDisabled, type, children }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={handleDisabled}
      className="px-6 py-4 font-bold text-white transition shadow rounded-xl bg-gh-brightBlue"
    >
      {children}
    </button>
  );
};

export default SearchButton;
