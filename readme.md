# 🚀 Blog

QuickBlog is a modern, full-stack blogging platform built with React, Vite, Express, and MongoDB. It features a beautiful UI, rich text editing, AI-powered content generation, image uploads, and a robust admin dashboard for managing blogs and comments.

---

## ✨ Features

- **Modern UI**: Responsive and clean design using Tailwind CSS.
- **Rich Text Editor**: Write blogs with formatting using Quill.
- **AI Content Generation**: Generate blog content with Gemini AI.
- **Image Uploads**: Upload and optimize images via ImageKit.
- **Admin Dashboard**: Manage blogs, comments, and drafts.
- **Comment System**: Readers can comment; admin approval required.
- **Category Filtering & Search**: Easily find blogs by category or keyword.
- **Authentication**: Secure admin login with JWT.
- **Newsletter Section**: Collect user emails (UI only).

---

## 🗂️ Project Structure

```
client/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── components/
  │   ├── context/
  │   ├── pages/
  │   ├── App.jsx
  │   ├── main.jsx
  │   └── index.css
  ├── package.json
  └── vite.config.js

server/
  ├── config/
  ├── controllers/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── server.js
  └── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas or local MongoDB instance
- ImageKit account (for image uploads)
- Gemini AI API key (for AI content)

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/Blog.git
cd Blog
```

### 2. Setup the Server

```sh
cd backend
cp .env.example .env   # Fill in your credentials
npm install
npm run server         # Starts with nodemon
```

### 3. Setup the Client

```sh
cd ../frontend
cp .env.example .env   # Set VITE_BASE_URL (e.g., http://localhost:3000)
npm install
npm run dev
```

The client will run on [http://localhost:5173](http://localhost:5173) by default.

---

## ⚙️ Environment Variables

### Server (`server/.env`)

```
MONGODB_URI=your_mongodb_uri
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
JWT_SECRET=your_jwt_secret

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

GEMINI_API_KEY=your_gemini_api_key
```

### Client (`client/.env`)

```
VITE_BASE_URL=http://localhost:3000
```

---

## 🖥️ Usage

- **Homepage**: Browse, search, and filter blogs.
- **Blog Page**: Read blogs, view comments, and add your own.
- **Admin**: Login to access dashboard, add/list blogs, and moderate comments.

---

## 📸 Screenshots

> _Add screenshots here for Home, Blog, and Admin Dashboard UI._

---

## 🤖 AI Integration

- Uses Gemini AI for generating blog content suggestions.
- Accessible from the "Add Blog" page in the admin dashboard.

---

## 📦 Deployment

- Client and server are ready for deployment on Vercel, Netlify, or any Node.js hosting.
- Update environment variables for production.

---

## 🙏 Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Quill](https://quilljs.com/)
- [ImageKit](https://imagekit.io/)
- [Gemini AI](https://ai.google.dev/)

---

## 📄 License

MIT License

---

> Made with ❤️ by [Mohd fazal Ali]
