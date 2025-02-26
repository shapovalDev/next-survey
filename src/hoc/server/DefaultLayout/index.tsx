import React, { ReactNode } from 'react';
import classNames from 'classnames';
import BackButton from '@/ui/BackButton';

export enum LayoutType {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface IProps {
  children: ReactNode;
  classes?: string;
  layoutType?: LayoutType;
  backButton?: boolean;
}

const DefaultLayout = ({
  children,
  classes = '',
  layoutType = LayoutType.Primary,
  backButton = false,
}: IProps) => {
  const styles = {
    primary: 'bg-lightPink text-black',
    secondary:
      'bg-gradient-to-b from-darkBlue via-darkPurple to-lightPurple text-white',
  };

  return (
    <section
      className={classNames(
        'flex flex-col items-center min-h-screen h-full px-4 sm:px-[20%] pt-4 pb-20',
        styles[layoutType],
      )}
    >
      <header
        className={classNames('w-full flex items-center relative mb-10', {
          'pt-4': !backButton,
        })}
      >
        {backButton && <BackButton />}
        <div className="text-2xl font-bold absolute left-1/2 -translate-x-1/2">
          N
        </div>
      </header>
      <main className={classNames('w-full sm:w-1/3', classes)}>{children}</main>
    </section>
  );
};

export default DefaultLayout;
