# TaskMan

Welcome to **TaskMan**, an intuitive task management web application designed to help users efficiently organize, prioritize, and track tasks. This frontend is built using **React**, **Tailwind CSS**, and **Firebase Authentication** for user login. The backend is hosted on **Vercel**, while the frontend is deployed on **Firebase Hosting**.

## 🚀 Live Demo
🔗 [Frontend Live Link](https://task-nest-1bc84.web.app/)

## 🚀 Features
- **Google Authentication** (Firebase)
- **Drag-and-Drop Task Management** (react-beautiful-dnd)
- **Task Prioritization & Reordering**
- **Real-time Task Updates** (Socket.io)
- **Customizable Task Categories: To-Do, In Progress, Done**
- **Modern & Responsive UI** (Tailwind CSS + DaisyUI)

---

## 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS, DaisyUI
- **State Management:** React Hooks
- **Authentication:** Firebase Auth
- **Real-Time Communication:** Socket.io-client
- **API Calls:** Axios

---

## 📦 Dependencies
```json
{
  "dependencies": {
    "autoprefixer": "^10.4.19",
    "axios": "^1.7.9",
    "daisyui": "^4.12.23",
    "firebase": "^11.3.1",
    "localforage": "^1.10.0",
    "match-sorter": "^8.0.0",
    "postcss": "^8.4.35",
    "react": "^18.3.1",
    "react-beautiful-dnd": "^13.1.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.2.0",
    "react-toastify": "^11.0.3",
    "socket.io-client": "^4.8.1",
    "sort-by": "^1.2.0",
    "tailwindcss": "^3.3.5"
  }
}
```

---

## 📁 Folder Structure
```
frontend/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── providers/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   ├── index.js
│── .gitignore
│── package.json
│── tailwind.config.js
│── README.md
```

---

## 🔥 Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-repo/TaskMan-frontend.git
cd TaskMan-frontend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up Firebase
- Create a Firebase project
- Enable Google Authentication in Firebase Auth
- Create a `.env.local` file and add:
```sh
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
```

### 4️⃣ Run the development server
```sh
npm run dev
```

### 5️⃣ Build for production
```sh
npm run build
```

---

## 🚀 Deployment
### Deploy on Firebase Hosting
```sh
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

---

## 📌 Contribution Guidelines
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a **Pull Request**

---

## 📄 License
MIT License © 2025 TaskMan

---

## ✨ Author
Developed by Abdulla Al Muhit with ❤️
