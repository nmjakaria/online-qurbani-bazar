# 🐄 QurbaniHut | Modern Livestock Marketplace

**QurbaniHut** is a professional Full-Stack web application designed to simplify the process of exploring and booking livestock for Qurbani. Built with performance, trust, and user experience in mind, the platform delivers a seamless livestock-to-customer marketplace with a modern, high-conversion interface.

🔗 **Live Link:** https://online-qurbani-bazar.vercel.app/ <br/>
💻 **GitHub Repo:** https://github.com/nmjakaria/online-qurbani-bazar

---

## 🌟 Key Features

### 🐂 Dynamic Animal Marketplace

* Browse a wide range of livestock listings
* Detailed breed, weight, pricing, and seller information
* High-quality visuals with responsive card layouts

### 🔒 Protected Routes (Next.js Middleware / Proxy)

* Authentication required for:

  * `/animals/[id]`
  * `/my-profile`
* Secure session validation and route protection

### 🛒 Optimized Cart Experience

* Sliding cart drawer UI
* Fixed footer checkout button
* Improved user conversion flow

### 📝 Advanced Form Handling

* React Hook Form integration
* Custom validations
* Password visibility toggle
* Improved login/signup UX

### ⭐ Trust Indicators

* Verified seller badges
* Ratings and reviews
* Enhanced customer confidence

---

## 🛠️ Tech Stack

### Frontend

* Next.js 14+ (App Router)
* React.js
* Tailwind CSS
* daisyUI

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* Better Auth
* Google OAuth 2.0
* Session-based secure authentication

### Deployment

* Vercel

---

## 📦 Project Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/nmjakaria/online-qurbani-bazar.git
cd online-qurbani-bazar
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_endpoint
AUTH_SECRET=your_auth_secret
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

---

## 🔒 Route Protection

Protected routes include:

* `/animals/[id]`
* `/my-profile`

Implemented using Next.js Middleware for authentication checks and redirect handling.

---

## 🚀 Future Improvements

* Payment gateway integration
* Seller dashboard
* Real-time livestock availability
* Order tracking system
* Admin analytics panel

---

## 👨‍💻 About the Developer

**Naimullah Md Jakaria**
4th Year B.Sc. in CSE Student at BGC Trust University Bangladesh
Full-Stack Web Developer specializing in administrative automation systems and marketplace platforms.
