<div align="center">
  <h1>MoviPlus</h1>
  <p><strong>Find the films you’ll want to watch next.</strong></p>
  <p>A polished movie discovery app for exploring what’s popular, searching TMDB, and keeping a personal favorites list.</p>
  <p>
    <img src="https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-powered-646CFF?logo=vite&logoColor=white" alt="Powered by Vite" />
    <img src="https://img.shields.io/badge/TMDB-API-01B4E4?logo=themoviedatabase&logoColor=white" alt="TMDB API" />
    <img src="https://img.shields.io/badge/ESLint-enabled-4B32C3?logo=eslint&logoColor=white" alt="ESLint enabled" />
  </p>
</div>

---

## About

MoviPlus makes it easy to find something worth watching. Browse popular movies as soon as the app opens, search by title, and save favorites for later. Your favorites stay available between visits using browser storage.

## Features

- **Movie search** — Find films by title with TMDB.
- **Popular right now** — Explore popular movies on the home page.
- **Personal favorites** — Add or remove titles and keep the list in `localStorage`.
- **Simple navigation** — Move between Home and Favorites with React Router.
- **Fast development** — Build and iterate with Vite and its hot module replacement.

## Built with

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Development and build | Vite |
| Routing | React Router |
| Movie data | The Movie Database (TMDB) API |
| Favorites persistence | Browser `localStorage` |
| Code quality | ESLint |

## Getting started

### Prerequisites

- Node.js and npm
- A TMDB API key

### 1. Clone the repository

Replace the account and repository values with the GitHub URL for your project.

```bash
git clone https://github.com/<your-account>/moviplus.git
cd moviplus
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure TMDB

Create a `.env` file in the project root and add your TMDB key. Vite only exposes environment variables prefixed with `VITE_`; make sure the variable name matches the one used in `src/Services/api.js`.

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

```bash
npm run dev      # Start the local development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project structure

```text
src/
├── Components/
│   ├── Navbar.jsx          # Top navigation bar
│   └── MovieCard.jsx       # Movie poster card and favorite toggle
├── Pages/
│   ├── Home.jsx            # Search and popular movies
│   └── Favorites.jsx       # Saved favorites grid
├── Context/
│   └── MovieContext.jsx    # Shared favorites state backed by localStorage
├── Services/
│   └── api.js              # TMDB popular-movie and search requests
├── css/                    # Component and page styles
├── App.jsx                 # App layout and routes
└── main.jsx                # React entry point
```

## TMDB attribution

Movie information and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/). MoviPlus is an independent project and is not endorsed or certified by TMDB.

## Contributing

Issues and pull requests are welcome. For a change, create a feature branch, make your updates, and open a pull request with a short summary of the improvement.

## License

No license has been specified yet. Add a `LICENSE` file before redistributing this project.
