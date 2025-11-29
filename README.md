# Elangovan's Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Node.js.

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.
- **Modern UI**: Dark theme with glassmorphism effects and smooth animations using Framer Motion.
- **Interactive Elements**: Tech stack orbit animation, hover effects, and smooth scrolling.
- **Contact Form**: Functional contact form powered by a Node.js backend and Resend for email delivery.

## Tech Stack

### Frontend
- **React**: UI library.
- **Vite**: Build tool.
- **Tailwind CSS**: Utility-first CSS framework.
- **Framer Motion**: Animation library.
- **React Icons**: Icon set.

### Backend
- **Node.js & Express**: Server runtime and framework.
- **Mongoose**: MongoDB object modeling.
- **Resend**: Email delivery service.
- **Cors**: Cross-Origin Resource Sharing.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB instance (local or Atlas)

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2.  **Setup Frontend**
    ```bash
    npm install
    ```

3.  **Setup Backend**
    ```bash
    cd Backend
    npm install
    ```

4.  **Environment Variables**
    Create a `.env` file in the `Backend` directory with the following variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    RESEND_API_KEY=your_resend_api_key
    ```

### Running the Project

1.  **Start the Backend Server**
    ```bash
    cd Backend
    npm run dev
    ```
    The server will start on `http://localhost:3001`.

2.  **Start the Frontend Development Server**
    Open a new terminal in the root `portfolio` directory:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5174`.

## Project Structure

```
portfolio/
├── Backend/            # Node.js backend
│   ├── server.js       # Express server entry point
│   └── ...
├── src/                # Frontend source code
│   ├── components/     # Reusable UI components
│   ├── sections/       # Page sections (Hero, About, etc.)
│   ├── utils/          # Helper functions and constants
│   ├── App.tsx         # Main application component
│   └── index.css       # Global styles and Tailwind directives
├── public/             # Static assets
└── ...
```

## License

This project is licensed under the ISC License.
