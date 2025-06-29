export function initThemeManager() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('theme') || 'dark';

  function updateThemeButton(theme) {
    const icon = theme === 'light' ? '🌙' : '☀️';
    themeToggleBtn.textContent = `Change theme ${icon}`;
  }

  root.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeButton(next);
  });
}
console.log('ESLint test');
