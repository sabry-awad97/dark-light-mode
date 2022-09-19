import { ChangeEventHandler, FC } from 'react';
import { TMode } from '../types';

interface Props {
  theme: TMode;
  onThemeSwitch: ChangeEventHandler<HTMLInputElement>;
}

export const Theme: FC<Props> = ({ theme, onThemeSwitch }) => {
  const icon = theme === 'light' ? 'fa-sun' : 'fa-moon'; // ☀️ | 🌒
  const mode = theme === 'light' ? 'Light Mode' : 'Dark Mode';
  const checked = theme === 'dark';
  return (
    <div className="theme-switch-wrapper">
      <span>
        <span className="toggle-text">{mode}</span>
        <i className={`fas ${icon}`}></i>
      </span>
      <label className="theme-switch">
        <input type="checkbox" checked={checked} onChange={onThemeSwitch} />
        <div className="slider round"></div>
      </label>
    </div>
  );
};
