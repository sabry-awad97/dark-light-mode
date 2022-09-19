export const Theme = () => {
  return (
    <div className="theme-switch-wrapper">
      <span id="toggle-icon">
        <span className="toggle-text">Light Mode</span>
        <i className="fas fa-sun"></i>
      </span>
      <label className="theme-switch">
        <input type="checkbox" />
        <div className="slider round"></div>
      </label>
    </div>
  );
};
