import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Theme } from './components/Theme';
import { TMode } from './types';

const App = () => {
  const [mode, setMode] = useState<TMode>('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') as TMode | null;
    if (!currentTheme) return;
    setMode(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const switchTheme: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setMode('dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setMode('light');
    }
  };

  return (
    <>
      <Theme theme={mode} onThemeSwitch={switchTheme} />
      <Nav theme={mode} />
      <Home />
      <About theme={mode} />
      <Projects theme={mode} />
      <Contact />
    </>
  );
};

export default App;
