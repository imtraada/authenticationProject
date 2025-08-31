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

[![express version](https://img.shields.io/npm/v/express.svg?label=express)](https://www.npmjs.com/package/express)
[![cors version](https://img.shields.io/npm/v/cors.svg?label=cors)](https://www.npmjs.com/package/cors)
[![dotenv version](https://img.shields.io/npm/v/dotenv.svg?label=dotenv)](https://www.npmjs.com/package/dotenv)
[![nodemon version](https://img.shields.io/npm/v/nodemon.svg?label=nodemon)](https://www.npmjs.com/package/nodemon)
[![jsonwebtoken version](https://img.shields.io/npm/v/jsonwebtoken.svg?label=jsonwebtoken)](https://www.npmjs.com/package/jsonwebtoken)
[![mongoose version](https://img.shields.io/npm/v/mongoose.svg?label=mongoose)](https://www.npmjs.com/package/mongoose)
[![bcryptjs version](https://img.shields.io/npm/v/bcryptjs.svg?label=bcrypts)](https://www.npmjs.com/package/bcryptjs)
[![nodemailer version](https://img.shields.io/npm/v/nodemailer.svg?label=nodemailer)](https://www.npmjs.com/package/nodemailer)
[![cookie-parser version](https://img.shields.io/npm/v/cookie-parser.svg?label=cookie-parser)](https://www.npmjs.com/package/cookie-parser)


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
