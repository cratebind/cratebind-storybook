import React from 'react';

export type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children, ...props }: Props) => {
  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
