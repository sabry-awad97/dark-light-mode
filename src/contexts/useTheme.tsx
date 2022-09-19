import { createContext, FC, useContext, useEffect, useState } from 'react';
import { TMode } from '../types';

interface ThemeContextType {
  mode: TMode;
  switchTheme: React.ChangeEventHandler<HTMLInputElement>;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  switchTheme: () => undefined,
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
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
    <ThemeContext.Provider value={{ switchTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
