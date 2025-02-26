import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  className = '',
  disabled = false,
  ...restProps
}: IProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames(
        'w-full bg-primaryGrey border rounded-2xl border-secondaryGrey text-black shadow-md px-2 py-4',
        'active:text-white active:bg-gradient-to-b from-darkBlue via-darkPurple to-lightPurple',
        'flex items-center justify-center text-center break-words whitespace-normal',
        { 'opacity-50 pointer-events-none': disabled },
        className || '',
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
