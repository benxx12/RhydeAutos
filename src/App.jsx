import { useEffect, useState } from 'react';
import { CarsProvider, useCars } from './context/CarsContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InventoryPage from './pages/InventoryPage';
import ContactPage from './pages/ContactPage';
import CarDetailsPage from './pages/CarDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function AppContent() {
  const { cars } = useCars();
  const [location, setLocation] = useState(
    `${window.location.pathname}${window.location.hash}`
  );
  const pathname = location.split('#')[0] || '/';
  const scrollBehavior = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    ?.matches
    ? 'instant'
    : 'smooth';
  const detailMatch = pathname.match(/^\/cars\/([^/]+)\/?$/);
  const activeCar = detailMatch
    ? cars.find((car) => car.id === detailMatch[1])
    : null;

  useEffect(() => {
    const syncLocation = () =>
      setLocation(`${window.location.pathname}${window.location.hash}`);
    window.addEventListener('popstate', syncLocation);
    return () => window.removeEventListener('popstate', syncLocation);
  }, []);

  useEffect(() => {
    const hash = location.split('#')[1];
    if (!hash) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: scrollBehavior });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location, scrollBehavior]);

  const navigate = (to) => {
    window.history.pushState({}, '', to);
    const nextLocation = `${window.location.pathname}${window.location.hash}`;
    setLocation(nextLocation);
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (nextLocation === location) {
      requestAnimationFrame(() => {
        document
          .getElementById(window.location.hash.slice(1))
          ?.scrollIntoView({ behavior: scrollBehavior });
      });
    }
  };

  return (
    <div className="min-h-screen scroll-smooth bg-white font-sans text-ink antialiased motion-reduce:scroll-auto">
      <Header onNavigate={navigate} pathname={pathname} />
      <main>
        {pathname === '/' ? (
          <HomePage onNavigate={navigate} />
        ) : pathname === '/about' ? (
          <AboutPage onNavigate={navigate} />
        ) : pathname === '/inventory' ? (
          <InventoryPage onNavigate={navigate} />
        ) : pathname === '/contact' ? (
          <ContactPage onNavigate={navigate} />
        ) : activeCar ? (
          <CarDetailsPage car={activeCar} onNavigate={navigate} />
        ) : (
          <NotFoundPage onNavigate={navigate} />
        )}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

function App() {
  return (
    <CarsProvider>
      <AppContent />
    </CarsProvider>
  );
}

export default App;
