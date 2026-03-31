# USE-POPCORN

usePopcorn is a React application that allows users to search for movies using the OMDb API, view detailed information about them, and manage a personal "Watched" list with custom star ratings. This project was built as part of the Ultimate React Course by Jonas Schmedtmann to master complex state management, effects, and custom hooks.

🚀 Live Demo
(https://use-popcorn-27.netlify.app/)

🚀 Features
Real-time Movie Search: Search for any movie via the OMDb API.

Detailed Movie View: Click on a movie to see its plot, actors, director, and genre.

Interactive Star Rating: A reusable StarRating component to rate movies before adding them to your list.

Watched List Management: Add movies to your watched list and track your personal statistics (Average IMDb rating, your rating, and total runtime).

Persistence: Your watched list is saved to localStorage so it persists even after a page refresh.

Custom Hooks: Built using custom hooks like useMovies for fetching and useLocalStorageState for data persistence.

🛠️ Tech Stack
Frontend: React.js

Styling: Pure CSS (Component-based)

API: OMDb API

State Management: useState, useEffect, useRef

🧠 Key Concepts Learned
Component Composition: Using the children prop to avoid "prop drilling."

The Component Lifecycle: Handling side effects with useEffect.

Data Fetching: Managing loading and error states during asynchronous API calls.

Ref Hook: Using useRef to interact with the DOM (e.g., focusing the search bar on "Enter").

Custom Hooks: Abstracting logic into reusable hooks to keep components clean.
