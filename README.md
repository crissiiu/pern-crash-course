# React, Node.js, Zustand, PostgreSQL, Stripe, Express.js, Axios, TailwindCSS & DaisyUI

## Overview
This project is a full-stack web application built using React for the frontend and Node.js for the backend. It leverages Zustand for state management, PostgreSQL as the database, Express.js for building RESTful APIs, Axios for HTTP requests, and TailwindCSS with DaisyUI for styling.

## Tech Stack
- **Frontend**: React, Zustand, Axios, TailwindCSS, DaisyUI
- **Backend**: Node.js, Express.js, PostgreSQL

## Features
- Authentication & Authorization
- State management with Zustand
- RESTful API using Express.js
- Database management with PostgreSQL
- Responsive UI with TailwindCSS & DaisyUI
- API calls using Axios

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version)
- PostgreSQL
- Yarn or npm

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/project-name.git
   cd project-name
   ```
2. Install dependencies for frontend and backend:
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```
3. Create a `.env` file in the backend directory and configure your environment variables:
   ```env
   DATABASE_URL=your_postgresql_url
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```
4. Run PostgreSQL and apply migrations (if using an ORM like Prisma or Sequelize):
   ```sh
   npx prisma migrate dev  # or equivalent command for Sequelize
   ```
5. Start the backend server:
   ```sh
   cd backend
   yarn start  # or npm start
   ```
6. Start the frontend:
   ```sh
   cd frontend
   yarn start  # or npm start
   ```

## Usage
- Access the frontend at `http://localhost:3000`
- API is hosted at `http://localhost:5000`

## Project Structure
```
pern-crash-course/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
│   ├── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/ (Zustand state management)
│   │   ├── App.js
│   │   ├── index.js
│   ├── tailwind.config.js
│   ├── package.json
│
├── README.md
```

## Contributing
Feel free to fork this repository and make improvements. Pull requests are welcome!
