# 🔗 URL Shortener Backend

> A fast, scalable, and minimal backend service for shortening long URLs into clean, shareable links.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=for-the-badge\&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge\&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## ✨ Features

* 🔗 Shorten long URLs instantly
* ⚡ Fast redirection
* 📊 Track click counts
* 🧠 Unique short code generation
* 🔒 Input validation & error handling
* 🌍 RESTful API design

---

## 📁 Project Structure

```
├── controllers/
├── models/
├── routes/
├── utils/
├── config/
├── app.js
└── server.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/url-shortener-backend.git
cd url-shortener-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

### 4. Run the server

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

### ➤ Create Short URL

```
POST /api/shorten
```

#### Request Body

```json
{
  "url": "https://example.com"
}
```

#### Response

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

### ➤ Redirect to Original URL

```
GET /:shortCode
```

➡️ Redirects to the original URL.

---

### ➤ Get URL Analytics (Optional)

```
GET /api/stats/:shortCode
```

#### Response

```json
{
  "originalUrl": "https://example.com",
  "clicks": 10,
  "createdAt": "2026-04-26T10:00:00Z"
}
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* dotenv
* nanoid / uuid

---

## ⚙️ Scripts

```bash
npm run dev     # Run with nodemon
npm start       # Run production server
```

---

## 🔒 Validation & Error Handling

* Validates URL format before shortening
* Handles duplicate entries
* Returns meaningful HTTP status codes

---

## 🌱 Future Improvements

* 🔐 Authentication & user accounts
* 📈 Advanced analytics dashboard
* ⏳ URL expiration
* 🧾 Custom aliases
* 🌍 Rate limiting

---

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo
# Create your branch
git checkout -b feature/your-feature

# Commit changes
git commit -m "Add your feature"

# Push changes
git push origin feature/your-feature

# Open a Pull Request
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 💡 Author

Built with ❤️ by **Your Name**

---

## ⭐ Show your support

Give a ⭐ if you like this project!
