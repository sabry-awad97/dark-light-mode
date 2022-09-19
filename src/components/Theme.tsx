import { useTheme } from '../contexts/useTheme';

export const Theme = () => {
  const { mode: theme, switchTheme: onThemeSwitch } = useTheme();

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
