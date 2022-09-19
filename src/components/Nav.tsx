import { FC } from 'react';
import { TMode } from '../types';

interface Props {
  theme: TMode;
}

export const Nav: FC<Props> = ({ theme }) => {
  const backgroundColor = theme === 'dark' ? 'rgb(0 0 0 / 50%)' : undefined;
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
