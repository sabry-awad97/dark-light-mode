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

  const setTheme = (theme: TMode) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setMode(theme);
  };

  const switchTheme: React.ChangeEventHandler<HTMLInputElement> = e => {
    if (e.target.checked) setTheme('dark');
    else setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ switchTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
