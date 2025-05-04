# To-Do App

A full-stack To-Do application built with React (frontend) and Node.js/Express/MySQL (backend).

---

## 🚀 Features & Functionality

- **User Authentication:** Secure registration and login with JWT.
- **Task Management:** Add, edit, complete, and delete to-do items.
- **Responsive UI:** Clean, mobile-friendly design using Bootstrap 4.
- **Persistent Storage:** All data is stored and retrieved from a MySQL database.
- **Real-time Feedback:** Instant UI updates on all actions.

---


## ⚠️ Error Handling

- **API Errors:** All backend routes use try/catch and send descriptive error responses.
- **Frontend Validation:** User inputs are validated with clear error messages.
- **Edge Cases:** Handles duplicate users, invalid credentials, empty to-dos, and unauthorized actions gracefully.
- **Global Error Middleware:** Centralized error handler in Express ensures consistent error responses.

---

## 📝 Best Practices

- **React Hooks:** Uses `useState`, `useEffect`, and custom hooks for clean, functional components.
- **Async/Await:** All API calls and async operations use `async/await` for readability and error handling.
- **Separation of Concerns:** Logic is separated between UI, API, and data layers.
- **Environment Variables:** Sensitive configs are stored in `.env` files (never hard-coded).
- **Consistent Naming:** Variables and functions use clear, descriptive names.
- **Linting:** Follows standard JS/React linting rules for code quality.
- **State Management:** Utilizes the React Context API for global state management (such as authentication and to-do lists), avoiding prop drilling and keeping state logic organized and accessible across the component tree.

---

## 📦 Tech Stack

- **Frontend:** React, Bootstrap 4
- **Backend:** Node.js, Express, MySQL
- **Auth:** JWT (JSON Web Tokens)

## ▶️ How to Run the Application

Follow these steps to set up and run the application locally:

### 2. Start MySQL

- Make sure your MySQL server is running.
- Create the required database and user as per your configuration in the `.env` file.

## Setup Instructions

### Backend

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Configure environment variables:**  
   Create a `.env` file (see `.env.example`).

3. **Set up MySQL database:**  
   Run the provided SQL to create `users` and `todos` tables.

4. **Start the backend:**
   ```bash
   npm run dev
   ```
   Runs on `http://localhost:5000`

---

### Frontend

1. **Install dependencies:**
   ```bash
   cd frontend

   npm install
   ```

2. **Start the React app:**
   ```bash
   npm start
   ```
   Runs on `http://localhost:3000`

---

### 2. Start the Backend

```bash
cd backend
npm install
npx nodemon app.js
```

> This will start the backend server with hot-reloading enabled.


### 3. Open the Application

- Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

**Note:**  
- Ensure you have installed all dependencies in both `backend` and `frontend` folders using `npm install`.
- Configure your environment variables in `.env` files before running the servers.
