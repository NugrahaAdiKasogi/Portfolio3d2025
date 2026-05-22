import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react'; // 1. Import useLenis

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis(); // 2. Ambil instance Lenis yang sedang aktif

  useEffect(() => {
    if (lenis) {
      // Jika Lenis aktif, suruh Lenis lompat ke paling atas (0) secara instan
      lenis.scrollTo(0, { immediate: true });
    } else {
      // Fallback jaga-jaga kalau Lenis telat load
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  return null;
};

export default ScrollToTop;
