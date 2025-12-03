# DevCon Event Talks App

This project is a single-page web application designed to display the schedule for a one-day technical conference. It provides a clear, interactive schedule of talks, including a designated lunch break, and allows users to easily filter talks by category.

## Features

*   **Comprehensive Schedule Display:** Presents a full day's schedule, detailing each talk's title, speakers, categories, description, and exact start/end times.
*   **Intuitive Category Search:** Users can filter the talks by entering keywords into a search bar, making it easy to find sessions of interest (e.g., "React", "AI", "Backend").
*   **Visual Schedule Separation:** The lunch break is clearly marked and visually separated from the talks, acting as a divider between morning and afternoon sessions.
*   **Responsive Design:** The frontend is built to provide a good user experience across various device sizes.

## Technologies Used

### Backend

*   **Nest.js:** A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.

### Frontend

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A fast frontend build tool that provides a lightning-fast development experience.
*   **TypeScript:** For type-safe frontend development.

### General

*   **pnpm:** A fast, disk space efficient package manager.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

*   **Node.js**: (LTS version recommended)
*   **pnpm**: You can install it globally via npm: `npm install -g pnpm`

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/cusxy/devcon-event-talks-app.git
    cd devcon-event-talks-app
    ```

2.  **Install Backend Dependencies:**
    Navigate into the `backend` directory and install the necessary packages:
    ```bash
    cd backend
    pnpm install
    cd ..
    ```

3.  **Install Frontend Dependencies:**
    Navigate into the `frontend` directory and install the necessary packages:
    ```bash
    cd frontend
    pnpm install
    cd ..
    ```

## Running the Application

You will need to run both the backend and frontend servers concurrently.

### 1. Start the Backend Server

Open your first terminal window, navigate to the `backend` directory, and start the Nest.js development server:

```bash
cd backend
pnpm run start:dev
```
The backend server will run on `http://localhost:3000`.

### 2. Start the Frontend Development Server

Open a **separate** terminal window, navigate to the `frontend` directory, and start the React development server:

```bash
cd frontend
pnpm run dev
```
The frontend application will typically open in your browser at `http://localhost:5173` (or another available port).

You should now see the event schedule in your browser, complete with talk details and the category search functionality.

## Project Structure

The project is organized into two main directories:

*   `backend/`: Contains the Nest.js application that serves the talk schedule data.
*   `frontend/`: Contains the React application that consumes the data and displays the user interface.

```
.
├── .gitignore
├── backend/
│   ├── src/
│   │   ├── talks/             # Talks module (controller, service, entities, DTOs)
│   │   └── main.ts            # Nest.js entry point, global prefix, CORS setup
│   ├── package.json
│   └── ... (other Nest.js files)
└── frontend/
    ├── src/
    │   ├── components/        # Reusable React components (Schedule, TalkCard, SearchBar)
    │   ├── App.tsx            # Main application component, data fetching
    │   ├── index.css          # Global CSS
    │   └── App.css            # App-specific CSS
    ├── package.json
    └── ... (other React/Vite files)
```

## Further Enhancements

*   **Dynamic Data:** Replace hardcoded data in `TalksService` with a database integration (e.g., PostgreSQL, MongoDB).
*   **Admin Panel:** Create a simple admin interface for managing talks (add, edit, delete).
*   **Speaker Profiles:** Add dedicated pages for speakers with their bios and talk history.
*   **Advanced Search/Filtering:** Implement more sophisticated filtering options (e.g., by speaker, time slot).
*   **User Favorites:** Allow users to mark talks as favorites.
*   **Error Handling:** Implement more robust error handling and display user-friendly messages.
