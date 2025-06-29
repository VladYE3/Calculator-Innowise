# Calculator Innowise

## Task

[Task specification](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0)

## How to run the app

1. Clone the repository:
   ```bash
   git clone https://github.com/VladYE3/Calculator-Innowise.git
   cd Calculator-Innowise
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start a static server (ES modules require HTTP). E.g.:
   ```bash
   npx serve .
   ```
4. Open the served URL (e.g. http://localhost:3000) in your browser.

//Folder Structure
Calculator Innowise/
├─ .husky/ # Git hooks (e.g. pre-commit scripts)
├─ node_modules/ # Installed npm packages (git-ignored)
├─ scripts/ # ES-module source files
│ ├─ index.js # App entry point: initializes theme & calculator
│ ├─ theme.js # Theme-switching logic
│ └─ calculator.js # Calculator core functions
├─ .eslintrc.js # ESLint configuration
├─ .eslintignore # Files and folders to ignore by ESLint
├─ .prettierrc # Prettier configuration
├─ .prettierignore # Files and folders to ignore by Prettier
├─ index.html # Main HTML markup and module loader
├─ styles.css # CSS styles (with theme variables)
├─ package.json # Project metadata, scripts & lint-staged config
└─ package-lock.json # Locked dependency versions
