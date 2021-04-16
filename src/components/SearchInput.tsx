import React, { ChangeEventHandler } from 'react';

interface Props {
  handleType: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

const SearchInput: React.FC<Props> = ({ handleType, placeholder }) => {
  return (
    <input
      type="search"
      onChange={handleType}
      className="w-full p-4 shadow rounded-xl bg-gh-gray"
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
