# 🌐 Website Navigator (MERN Assignment)

## 📌 Overview

This is a full-stack web application that allows users to upload an Excel/CSV file containing website URLs and navigate between them using Previous and Next buttons.

---

## 🚀 Features

* 📂 Upload Excel (.xlsx) or CSV file
* 🔗 Extract and display website URLs
* 🌍 View websites inside the app using iframe
* ⬅️➡️ Navigate between websites
* ⚠️ Handles iframe-restricted sites with fallback (open in new tab)
* 🔄 Loading state for better UX

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS

### Backend

* Node.js
* Express.js
* Multer (file upload)
* XLSX (Excel parsing)

---

## 📁 Project Structure

```
website-navigator/
  ├── backend/
  │   ├── controllers/
  │   ├── routes/
  │   ├── utils/
  │   ├── uploads/
  │   └── server.js
  │
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   ├── App.jsx
  │   │   └── main.jsx
  │   └── index.html
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone <your-repo-link>
cd website-navigator
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
node server.js
```

Runs on: `http://localhost:5000`

---

### 3️⃣ Setup Frontend

```
cd frontend
npm install
npm run dev
```

Runs on: `http://localhost:5173`

---

## 📂 File Format Example

Upload a file like:

```
URL
https://example.com
https://github.com
https://youtube.com
```

---

## ⚠️ Known Limitation

Some websites (like Google, GitHub, YouTube) block iframe embedding due to security headers (`X-Frame-Options`).
To handle this, the app provides a fallback option to open such sites in a new tab.

---


## 👨‍💻 Author

Dinesh Kumar
