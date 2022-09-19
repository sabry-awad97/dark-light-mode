import { useTheme } from '../contexts/useTheme';

export const Nav = () => {
  const { mode } = useTheme();

  const backgroundColor = mode === 'dark' ? 'rgb(0 0 0 / 50%)' : undefined;
  return (
    <nav
      style={{
        backgroundColor,
      }}
    >
      <a href="#home">HOME</a>
      <a href="#about">ABOUT</a>
      <a href="#projects">PROJECTS</a>
      <a href="#contact">CONTACT</a>
    </nav>
  );
};
