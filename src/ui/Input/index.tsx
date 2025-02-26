'use client';

import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { capitalizeString } from '@/helpers/capitalizeString';
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  RegisterOptions,
} from 'react-hook-form';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  className?: string;
  register: RegisterOptions;
}

const Input = ({ error, className = '', register, ...props }: IProps) => {
  const { message: errorMessage } = error || {};
  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          className={classNames(
            'w-full px-3 py-2 border rounded-md shadow-sm transition focus:outline-none',
            error ? 'border-red-500' : 'border-secondaryGrey',
            className,
          )}
          {...register}
          {...props}
        />
      </div>
      <div className="w-full text-left min-h-[20px]">
        {errorMessage && (
          <p className="text-sm text-red-500">
            {capitalizeString(errorMessage)}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
