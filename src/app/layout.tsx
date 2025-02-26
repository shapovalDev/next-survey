'use client';

import './globals.css';
import 'remixicon/fonts/remixicon.css';
import { ReactNode } from 'react';
import { store } from '@/stateManagement/store';
import { Provider } from 'react-redux';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Provider store={store}>{children}</Provider>{' '}
      </body>
    </html>
  );
}
