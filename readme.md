# 🇮🇳 Indian User Generator – Fetch API Project

A simple learning project built with **JavaScript** and **Fetch API**.  
This app generates **random Indian user profiles** using the [RandomUser API](https://randomuser.me/) and displays each user's **photo, name, email, gender, age, and location** with a clean, responsive interface.

🔗 **Live Demo:** [Indian User Generator](https://harshitshrivas.github.io/indian-user-generator-fetch/)

---

## 🚀 Features

- 🔄 Fetches random Indian user data using **Fetch API**
- 👤 Displays **photo, name, email, gender, age, and location**
- 💡 Includes a **loading spinner** during API calls
- ⚠️ Handles **errors gracefully** (e.g., no internet)
- 📱 Fully **responsive UI** for mobile and desktop
- 🎯 Simple, clean, and beginner-friendly JavaScript project

---

## 🧠 Learning Goals

This project helps you practice:
- Making API calls using `fetch()`
- Working with **Promises** and **async/await**
- DOM manipulation (displaying fetched data)
- Error handling in JavaScript
- Responsive web design basics

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **Fetch API**
- **RandomUser.me API**

---

## 🧩 How It Works

1. Click the **"Generate User"** button.  
2. The app calls the RandomUser API filtered for Indian nationality (`?nat=IN`).  
3. Displays the user's:
   - Profile picture  
   - Full name  
   - Email  
   - Gender  
   - Age  
   - Location (city, state)  
4. Shows a spinner while loading and handles any errors that occur.

---

## 🧪 Example API Endpoint

```js
fetch("https://randomuser.me/api/?nat=IN")
