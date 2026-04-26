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
├── connection.js/
├── config/
└── index.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
MONGO_URL=your_mongodb_connection_string
```

### 4. Run the server

```bash
npm start
```

Server will start at:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

### ➤ Create Short URL

```
POST /api/url
```

#### Request Body

```json
{
  "redirectUrl": "https://example.com"
}
```

#### Response

```json
{
  "shortId": "12345"
}
```

---

### ➤ Redirect to Original URL

```
GET /:shortId
```

➡️ Redirects to the original URL.

---

### ➤ Get URL Analytics (Optional)

```
GET /api/analytics/:shortCode
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
* nanoid / uuid

---

## ⚙️ Scripts

```bash
npm start       # Run with nodemon
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
