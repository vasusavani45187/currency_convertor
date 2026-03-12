# Currency Converter

A simple React and Vite currency converter that fetches live exchange rates and converts values between currencies in real time. The app uses a custom React hook for API access, reusable input components, and a clean Tailwind-based interface.

This is a frontend project intended for learning React concepts such as custom hooks, controlled components, state updates, and component reuse.

## Features

- Convert between multiple currencies
- Swap source and target currencies instantly
- Fetch latest exchange rates from a public API
- Reusable `InputBox` component for both input panels
- Custom `useCurrencyInfo` hook for currency data fetching
- Built with React + Vite for fast development
- Styled with Tailwind CSS utility classes

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- JavaScript
- Fetch API

## Project Structure

```text
06currencyConvertor/
  public/
  src/
    components/
      InputBox.jsx
      index.js
    hooks/
      useCurrencyInfo.js
    App.jsx
    App.css
    index.css
    main.jsx
  .gitignore
  eslint.config.js
  index.html
  package.json
  package-lock.json
  vite.config.js
```

## How It Works

1. The user enters an amount in the source currency field.
2. The app fetches currency rates based on the selected `from` currency.
3. On submit, the selected `to` currency rate is used to calculate the converted value.
4. The swap button exchanges the source and target currencies.

## API Used

Exchange rate data is fetched from:

`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/`

Because the app depends on a public API, an internet connection is required for conversions to work.

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal, typically `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Files You Should Push to GitHub

Based on the current `.gitignore`, these are the important files and folders to include:

- `src/`
- `public/`
- `.gitignore`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.js`
- `eslint.config.js`
- `README.md` or this new `README.github.md`
- any project notes you intentionally want to keep, such as `currency.md`

Do not push:

- `node_modules/`
- `dist/`
- local editor files
- log files

## Suggested GitHub Repository Flow

If the GitHub repository is already created, use these commands inside the project folder:

```bash
git init
git add .
git status
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

If Git is already initialized, skip `git init` and only add, commit, set the remote if needed, and push.

Before pushing, always run:

```bash
git status
```

That lets you verify `node_modules` and `dist` are not being tracked.

## License

Use this project for learning and portfolio purposes unless you add a separate license.
