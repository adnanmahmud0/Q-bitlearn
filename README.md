---

# **Q-bitlearn 🎓**

Q-bitlearn is a dynamic and user-friendly **MERN stack** platform designed to revolutionize how educational institutions, tutors, and students interact. It empowers users with robust class management tools, streamlined enrollment, and a responsive UI to enhance the learning experience.

---

## 🌐 Live Project Link

👉 [Visit Q-bitlearn Live](https://q-bitlearn.web.app/)

---

## 📸 Screenshots

![Q-bitlearn Screenshot](https://raw.githubusercontent.com/adnanmahmud0/Q-bitlearn/refs/heads/main/Screenshot%202025-02-08%20040159.png)

---

## 🔑 Default Credentials

| Role   | Email                      | Password  |
|--------|----------------------------|-----------|
| Admin  | `adnanmahmud@gmail.com`    | `Adnan@1` |

---

## 📖 Project Overview

**Q-bitlearn** is a comprehensive skill-learning and class-management platform tailored for educational environments. It supports real-time role-based access for Admins, Teachers, and Students. It streamlines the creation, management, and participation in online classes with intuitive dashboards, secure authentication, and modern design practices.

---

## ✨ Complete List of Features

### 🎨 **User Experience & Design**

- ✅ Responsive Design – Fully optimized for mobile, tablet, and desktop.
- ✅ Enhanced UI/UX – Smooth animations via Framer Motion & AOS.
- ✅ Dark/light mode and accessible layout.
- ✅ Toast & alert notifications for feedback.

### 🔐 **Authentication & Security**

- ✅ Firebase Authentication (Google/email login).
- ✅ JWT-protected routes for enhanced security.
- ✅ Role-based access control (Admin, Teacher, Student).
- ✅ .env configuration for all sensitive data.

### 🧠 **Platform Functionalities**

#### 🧑‍💼 Admin Dashboard

- Manage and control platform users.
- Approve/reject teacher registration requests.
- Approve/reject new class submissions.
- Platform insights: Total users, classes, and enrollments.

#### 👨‍🏫 Teacher Dashboard

- Submit new class requests.
- View and manage their submitted classes.
- Monitor enrolled students and review submissions.

#### 👩‍🎓 Student Dashboard

- Browse available classes.
- Enroll in approved classes.
- View personal enrollments and submit assignments.

### 🔍 Data Handling

- ✅ Server-side pagination and search.
- ✅ Filterable class and user lists.
- ✅ Data validation and error handling with feedback.

---

## 🛠️ Tech Stack Used

### **Frontend**

- [React.js](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Swiper.js](https://swiperjs.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [SweetAlert2](https://sweetalert2.github.io/)

### **Backend**

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)

### **Tools & Libraries**

- [Axios](https://axios-http.com/)
- [TanStack React Query](https://tanstack.com/query)
- [Firebase](https://firebase.google.com/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)

---

## 📂 Repositories

- **Frontend Repo:** [Client Side](https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-adnanmahmud0)
- **Backend Repo:** [Server Side](https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-adnanmahmud0)

---

## ⚙️ Setup and Installation Instructions

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) or local MongoDB setup
- [Firebase](https://firebase.google.com/) project with authentication enabled

---

### 🔧 Client Setup

1. Clone the client repository:
   ```bash
   git clone https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-adnanmahmud0.git
   cd b10a12-client-side-adnanmahmud0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root and add:
   ```
   VITE_API_URL=your_backend_api_url
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=...
   ...
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

---

### 🖥️ Server Setup

1. Clone the server repository:
   ```bash
   git clone https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-adnanmahmud0.git
   cd b10a12-server-side-adnanmahmud0
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and configure:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

## 📦 NPM Dependencies

```json
{
  "dependencies": {
    "@tanstack/react-query": "^5.64.2",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-hook-form": "^7.54.2",
    "react-icons": "^5.4.0",
    "react-modal": "^3.16.3",
    "react-rating": "^2.0.5",
    "react-rating-stars-component": "^2.2.0",
    "react-responsive-carousel": "^3.2.23",
    "react-router-dom": "^7.1.1",
    "react-toastify": "^11.0.3",
    "sort-by": "^1.2.0",
    "sweetalert2": "^11.15.10",
    "swiper": "^11.2.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.23",
    "eslint": "^9.17.0",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5"
  }
}
```

---

Let me know if you'd like a downloadable `README.md` version or an image preview of the project features layout.
