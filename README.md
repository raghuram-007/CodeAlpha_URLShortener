
# 📘 CodeAlpha — Simple URL Shortener

## 🔗 Overview

This is a simple URL Shortener Web Application built using Flask and SQLite as part of the CodeAlpha Backend Development Internship.
It allows users to input a long URL and get a unique shortened link that redirects to the original website.


# 🚀 Features

✅ Shorten any valid long URL into a unique short code

✅ Automatically redirect short URLs to the original destination

✅ Persistent database storage using SQLite

✅ User-friendly frontend interface

✅ Real-time short link display after submission

## Author

## 🧾 Internship Details

Organization: CodeAlpha

Domain: Backend Development

Task: Simple URL Shortener

👤 **Author:** Raghu Ram  
🌐 **GitHub:** [raghuram-007](https://github.com/raghuram-007)  



![Author](https://img.shields.io/badge/Author-Raghu%20Ram-blue?style=for-the-badge)
![GitHub](https://img.shields.io/badge/GitHub-raghuram--007-black?style=for-the-badge&logo=github&logoColor=white)

# 🔗 URL Shortener (Flask)

![Python Version](https://img.shields.io/badge/Python-3.13-blue?logo=python)
![Flask](https://img.shields.io/badge/Flask-Framework-black?logo=flask)
![Database](https://img.shields.io/badge/Database-SQLite-lightgrey?logo=sqlite)
![Frontend](https://img.shields.io/badge/Frontend-HTML%2C%20CSS%2C%20JS-yellow?logo=javascript)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4-red)

# Tech Stack

| **Category**    | **Technology / Tool**                 |
| --------------- | ------------------------------------- |
| 🧠 **Backend**  | Python (**Flask Framework**)          |
| 💾 **Database** | SQLite (via **Flask SQLAlchemy**)     |
| 🎨 **Frontend** | HTML, CSS, JavaScript (**Fetch API**) |
| 🧰 **Tools**    | VS Code, Flask Development Server     |

## ⚙️ Setup Instructions
## Clone the Repository

git clone https://github.com/raghuram-007/CodeAlpha_URL_Shortener.git

## 2️⃣ Navigate into the project directory

cd CodeAlpha_URL_Shortener


## 3️⃣ Create and activate a virtual environment

python -m venv venv

venv\Scripts\activate      # On Windows

source venv/bin/activate   # On macOS/Linux


## 4️⃣ Install dependencies

pip install flask flask_sqlalchemy


## 5️⃣ Run the application

python app.py


## 6️⃣ Open in browser

http://127.0.0.1:5000/

# 🧩 API Endpoints
## 🔹 POST /shorten

Request:

{

  "long_url": "https://www.example.com"

}


## Response:

{

  "long_url": "https://www.example.com",
  "short_url": "http://127.0.0.1:5000/AbC123"
  
}

## 🔹 GET /<short_code>

Redirects to the original URL if the code exists.
# Project Structure

Templates/

│

├── index.html

Static/

│

├── style.css

└── script.js

backend/

│

├── app.py


└── models.py



# 🧠 How It Works

1.User enters a long URL into the input field.

2.Frontend sends a POST request to the backend (/shorten endpoint).

3.Flask generates a unique short code and saves it in SQLite.

4.The shortened link appears on the screen and redirects to the original URL when accessed.