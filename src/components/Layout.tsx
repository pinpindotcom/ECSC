import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import CryptoBackground from './CryptoBackground';
import { Toaster } from '@/components/ui/toaster';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const hideNavigation = ['/signin', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        {!hideNavigation && <Navigation />}
        <main className={hideNavigation ? '' : 'pt-20'}>
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  );
};

export default Layout;