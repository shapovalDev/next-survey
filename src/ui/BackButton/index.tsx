'use client';

import React from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

interface IProps {
  className?: string;
}

const BackButton = ({ className = '' }: IProps) => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      <i
        className={classNames(
          'ri-arrow-left-s-line text-2xl cursor-pointer',
          className,
        )}
      />
    </button>
  );
};

export default BackButton;
