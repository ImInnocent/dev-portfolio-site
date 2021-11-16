import React, { ComponentProps, useCallback, useState } from 'react';

interface InputProps extends ComponentProps<'input'> {
  placeholder?: string;
};

const Input = ({ placeholder = '검색어를 입력하세요', ...props }: InputProps) => {
  const [value, setValue] = useState<string>('');
  return (
    <input
      className='w-3/4 p-2 rounded-md border-2'
      placeholder={placeholder}
      value={value}
      onChange={useCallback((e) => setValue(e.target.value), [])}
      {...props}
    />
  );
};

export default Input;
