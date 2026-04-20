import { useState, useEffect, useRef } from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { NAV_ITEMS } from './data/constants';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const observerRef = useRef(null);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <LeftPane activeSection={activeSection} onNavClick={handleNavClick} />
      <RightPane />
    </div>
  );
}

export default App;
