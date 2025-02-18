
---

# **Q-bitlearn 🎓**  

Q-bitlearn is a dynamic and user-friendly **MERN stack** platform designed to revolutionize how educational institutions, tutors, and students interact. It aims to make skill learning and class management more efficient and accessible than ever before.  

## 🌐 Live Website  
Visit the live website: [Q-bitlearn](https://q-bitlearn.web.app/)  

### 📸 Screenshot  
![Q-bitlearn Screenshot](https://raw.githubusercontent.com/adnanmahmud0/Q-bitlearn/refs/heads/main/Screenshot%202025-02-08%20040159.png)  

---

## 🔑 Admin Credentials  
- **Admin Email:** `adnanmahmud@gmail.com`  
- **Admin Password:** `Adnan@1`  

---

## 📂 Repositories  

- **Frontend Repository:** [Client Repo](https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-adnanmahmud0)  
- **Backend Repository:** [Server Repo](https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-adnanmahmud0)  

---

## ✨ Features  

### 🎨 **User Experience & Design**  
✅ **Responsive Design** – Optimized for mobile, tablet, and desktop.  
✅ **Enhanced UI/UX** – Includes animations using Framer Motion/AOS.  
✅ **Real-Time Notifications** – Toast notifications for authentication and CRUD operations.  

### 🔒 **Authentication & Security**  
✅ **Secure Authentication** – Firebase authentication with JWT for protected routes.  
✅ **Environment Safety** – Sensitive data (Firebase keys, MongoDB credentials) is secured via environment variables.  

### 📚 **Class & User Management**  
✅ **Dynamic Dashboard** – Separate dashboards for **Admins, Teachers, and Students**.  
✅ **Class Management** – Add, update, delete, and approve classes with real-time updates.  
✅ **Pagination & Search** – Efficiently browse users and classes with server-side pagination and search.  

### 🎓 **Role-Based Features**  

#### 🏫 **Admin Features:**  
- Manage users (approve/reject teacher requests).  
- Approve/reject classes.  
- View platform analytics (total users, enrollments, and classes).  

#### 👨‍🏫 **Teacher Features:**  
- Add new classes.  
- Monitor student enrollments.  
- Assign and review assignments.  

#### 👩‍🎓 **Student Features:**  
- Enroll in classes.  
- View enrolled classes.  
- Submit assignments.  

---

## 🛠️ Technologies Used  

### **Frontend**  
- [React.js](https://react.dev/) – Component-based UI development.  
- [React Router](https://reactrouter.com/) – Routing and navigation.  
- [Tailwind CSS](https://tailwindcss.com/) – Modern utility-first styling.  
- [DaisyUI](https://daisyui.com/) – Pre-designed UI components.  
- [React Hook Form](https://react-hook-form.com/) – Form validation and handling.  

### **Backend**  
- [Node.js](https://nodejs.org/) – JavaScript runtime.  
- [Express.js](https://expressjs.com/) – Backend framework.  
- [MongoDB](https://www.mongodb.com/) – NoSQL database.  
- [Mongoose](https://mongoosejs.com/) – MongoDB object modeling.  
- [JWT (JSON Web Token)](https://jwt.io/) – Secure authentication.  

### **Additional Libraries & Tools**  
- [Axios](https://axios-http.com/) – API requests.  
- [React Toastify](https://fkhadra.github.io/react-toastify/) – User-friendly notifications.  
- [SweetAlert2](https://sweetalert2.github.io/) – Alert pop-ups.  
- [Swiper.js](https://swiperjs.com/) – Interactive sliders and carousels.  
- [TanStack React Query](https://tanstack.com/query/latest) – Efficient data fetching and caching.  

---

## 📦 NPM Dependencies  

```json
{
  "name": "edurock",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.64.2",
    "axios": "^1.7.9",
    "firebase": "^11.1.0",
    "localforage": "^1.10.0",
    "lodash": "^4.17.21",
    "match-sorter": "^8.0.0",
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
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.23",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "postcss": "^8.5.0",
    "tailwindcss": "^3.4.17",
    "vite": "^6.0.5"
  }
}
```

---

## ⚡ Installation & Setup  

### **Prerequisites**  
- **Node.js** – Install [Node.js](https://nodejs.org/).  
- **MongoDB** – Set up a MongoDB database (local or cloud-based).  
- **Firebase** – Configure Firebase authentication.  

### **Client Setup**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-adnanmahmud0.git
   ```
2. Navigate to the project folder:  
   ```bash
   cd b10a12-client-side-adnanmahmud0
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Create a `.env` file and add your Firebase configuration.  
5. Start the development server:  
   ```bash
   npm run dev
   ```

### **Server Setup**  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-adnanmahmud0.git
   ```
2. Navigate to the project folder:  
   ```bash
   cd b10a12-server-side-adnanmahmud0
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Create a `.env` file with your MongoDB connection string and JWT secret.  
5. Start the server:  
   ```bash
   npm run dev
   ```

---

