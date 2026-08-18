🎬 MoviPlus

MoviPlus is a movie discovery web app built with React and Vite. Search for movies, browse what's popular right now, and save your favorites for later — all powered by The Movie Database (TMDB) API.

Features
🔍 Search — Look up any movie by title
🔥 Popular movies — Browse trending titles on load
❤️ Favorites — Save movies to a favorites list, persisted in localStorage
🧭 Client-side routing — Navigate between Home and Favorites with React Router
⚡ Fast dev experience — Built with Vite for instant HMR
Tech Stack
React 19
Vite
React Router
TMDB API
ESLint
Project Structure

src/
├── Components/
│   ├── Navbar.jsx        # Top navigation bar
│   └── MovieCard.jsx     # Movie poster card with favorite toggle
├── Pages/
│   ├── Home.jsx          # Search + popular movies grid
│   └── Favorites.jsx     # Saved favorites grid
├── Context/
│   └── MovieContext.jsx  # Global state for favorites (localStorage-backed)
├── Services/
│   └── api.js            # TMDB API calls (popular movies, search)
├── css/                  # Component/page-level styles
├── App.jsx               # Routes + layout
└── main.jsx               # App entry point
