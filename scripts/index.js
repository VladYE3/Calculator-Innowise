import '../styles.css';
import { initThemeManager } from './theme.js';
import { initCalculator } from './calculator.js';

document.addEventListener('DOMContentLoaded', () => {
  initThemeManager();
  initCalculator();
});
