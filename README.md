# MERN Authentication Server

Server backend untuk aplikasi autentikasi menggunakan stack MERN (MongoDB, Express, React, Node.js).

---

## Teknologi yang Digunakan

- **Express**: Framework backend Node.js untuk membangun API
- **Mongoose**: ODM untuk MongoDB
- **jsonwebtoken**: Membuat dan verifikasi JWT token untuk otentikasi
- **bcryptjs**: Hash password user
- **nodemailer**: Mengirim email verifikasi OTP
- **cors**: Mengatur Cross-Origin Resource Sharing
- **dotenv**: Mengelola environment variables
- **cookie-parser**: Parsing cookie untuk JWT token
- **nodemon** (dev dependency): Auto-restart server saat kode berubah

---

## Instalasi

1. Clone repository ini
   git clone https://github.com/imtraada/authenticationProject.git
   cd mern-auth/server
   
2. install dependensi
npm install express cors dotenv nodemon jsonwebtoken mongoose bcryptjs nodemailer cookie-parser

3. buat file .env di folder server
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
SENDER_EMAIL=your_email@example.com
EMAIL_PASSWORD=your_email_password

4. menjalankan server
npm run dev
pastikan package.json
"scripts": {
  "dev": "nodemon index.js"
}


semoga membantu 👍👍👍👍👍👍👍👍
