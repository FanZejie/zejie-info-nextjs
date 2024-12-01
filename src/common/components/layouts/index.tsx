'use client';
import clsx from 'clsx';

import { useTheme } from 'next-themes';
import { ReactNode } from 'react';




import HeaderSidebar from './header/HeaderSidebar';
import useHasMounted from '@/common/hooks/useHasMonted';


// import TopBar from '../elements/TopBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();



  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');







  return (
    <>
      {/* <TopBar /> */}
      <div
        className={clsx(
          'mx-auto max-w-6xl',
          isDarkTheme ? 'dark:text-darkText' : '',
        )}
      >
       
          <div className='flex flex-col lg:flex-row lg:gap-2 lg:py-4 xl:pb-8'>
            <HeaderSidebar />
            <main className=' max-w-[915px] transition-all duration-300 lg:w-4/5'>
              {children}
            </main>
          </div>
      
      </div>

    </>
  );
};

export default Layout;
