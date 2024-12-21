# 📱 Habit-Tracker

A modern, minimalist habit tracking application built with React and Flask. Track your habits, maintain journals, and get AI-powered suggestions—all without requiring registration.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react) ![Flask](https://img.shields.io/badge/Flask-2.0.1-000000?logo=flask)

---

## ✨ Features

- 🔐 **No Registration Required**: Start tracking immediately.
- ✅ **Mark Completed Days**: Simple clicks to track progress.
- 📊 **Visual Progress Tracking**: Charts and analytics to monitor your habits.
- 📝 **Journal Entries**: Maintain notes for each habit.
- 🏆 **Achievements System**: Celebrate milestones to stay motivated.
- 🤖 **AI-Powered Habit Suggestions**: Personalized recommendations for better habits.
- 🌓 **Dark/Light Theme Support**: Switch themes as per your preference.
- 📱 **PWA Support**: Install the app on any device for a native experience.

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- [Python](https://www.python.org/) (v3.8 or higher)
- pip (v20.0.0 or higher)

---

## ⚙️ Installation and Setup

Follow these steps to install, set up, and run the Habit-Tracker application:

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/mohitkr04/habit-tracker.git

# Navigate to the project directory
cd habit-tracker
```

### Step 2: Install Frontend Dependencies

```bash
# Install Node.js dependencies
npm install
```

### Step 3: Set Up Backend

```bash
# Navigate to the backend directory
cd backend

# Create a virtual environment
python -m venv venv

# Activate the virtual environment (Windows)
venv\Scripts\activate

# Activate the virtual environment (Mac/Linux)
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt
```

### Step 4: Start the Development Servers

```bash
# Start the backend server
cd backend
flask run
```

### Step 5: Build for Production

#### Frontend
```bash
# Build the React application
npm run build
npm start
```

#### Backend
```bash
# Run the production-ready Flask server
flask run
```

---

## 🛠️ How to Use

1. Open the app in your browser at `http://localhost:3000` (or the port specified during startup).
2. Add new habits by clicking on the **"Add Habit"** button.
3. Mark completed days on the calendar to track progress.
4. Use the dashboard to visualize your habit analytics and maintain habit journals.
5. Unlock achievements as you reach milestones to stay motivated.

---

## 🤝 Contributing

We welcome contributions to improve Habit-Tracker. Feel free to submit issues or pull requests via [GitHub](https://github.com/mohitkr04/habit-tracker).

---