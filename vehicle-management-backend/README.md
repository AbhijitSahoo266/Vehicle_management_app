# 🚗 Vehicle Fleet Management Backend

A Node.js + Express + PostgreSQL backend for managing rental vehicle fleets with authentication, vehicles, drivers, trips, and dashboard analytics.

---

# 🛠 Tech Stack

* Node.js
* Express.js
* PostgreSQL
* Sequelize ORM
* JWT Authentication
* Express Validator

---

# 📦 Features

* 🔐 Auth (Register/Login with JWT)
* 👨‍✈️ Driver Management (CRUD)
* 🚗 Vehicle Management (CRUD)
* 🚕 Trip Management (CRUD + ledger style)
* 📊 Dashboard Analytics
* 💰 Profit Calculation
* ✅ Validation Middleware
* 🔒 Secure APIs

---

# ⚙️ SETUP GUIDE

## 1️⃣ Install Node.js

Download and install LTS version:

👉 https://nodejs.org

Verify installation:

```bash
node -v
npm -v
```

---

## 2️⃣ Fix npm PowerShell Issue (Windows Only)

If npm is blocked in PowerShell, use:

```bash
npm.cmd
```

Example:

```bash
npm.cmd install
npm.cmd run dev
```

---

## 3️⃣ Install PostgreSQL

Download:
👉 https://www.postgresql.org/download/

During install remember:

* Username: `postgres`
* Password: (save it)
* Port: `5432`

Verify:

```bash
psql --version
```

---

## 4️⃣ Create Database

Open pgAdmin or psql and create DB:

```sql
CREATE DATABASE vehicle_fleet;
```

---

## 5️⃣ Clone Project

```bash
git clone <your-repo-url>
cd vehicle-management-backend
```

---

## 6️⃣ Install Dependencies

```bash
npm.cmd install
```

This installs:

* express
* sequelize
* pg
* bcrypt
* jsonwebtoken
* express-validator
* dotenv
* nodemon

---

## 7️⃣ Environment Variables

Create `.env` file in root:

```env
PORT=5000

DB_NAME=vehicle_fleet
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

JWT_SECRET=super_secret_key
```

---

## 8️⃣ Sequelize Configuration

Database connection is handled using Sequelize:

```
src/config/sequelize.js
```

On first run, Sequelize will auto-create tables:

```js
sequelize.sync({ alter: true });
```

⚠️ Use `alter` only in development.

---

# ▶️ RUN THE PROJECT

## Development Mode

```bash
npm.cmd run dev
```

If using Linux/Mac:

```bash
npm run dev
```

Server starts at:

```
http://localhost:5000
```

---

# 📁 Project Structure

```
src/
│
├── config/
│   └── sequelize.js
│
├── models/
│   ├── User.js
│   ├── Driver.js
│   ├── Vehicle.js
│   └── Trip.js
│
├── controllers/
├── routes/
├── middleware/
├── validators/
│
└── index.js
```

---

# 🔐 Authentication

### Register

```
POST /api/auth/register
```

### Login

```
POST /api/auth/login
```

Use returned JWT:

```
Authorization: Bearer <token>
```

---

# 🚀 Core APIs

## Drivers

* POST /api/drivers
* GET /api/drivers
* PUT /api/drivers/:id
* DELETE /api/drivers/:id

## Vehicles

* POST /api/vehicles
* GET /api/vehicles
* PUT /api/vehicles/:id
* DELETE /api/vehicles/:id

## Trips

* POST /api/trips
* GET /api/trips
* PUT /api/trips/:id
* DELETE /api/trips/:id

---

# 📊 Dashboard APIs

* GET /api/dashboard/overview
* GET /api/dashboard/earnings
* GET /api/dashboard/profit
* GET /api/dashboard/vehicle-summary
* GET /api/dashboard/active-vehicles

---

# 💰 Profit Formula

```
Profit = Total Fare
       - (Fuel + Maintenance + Other Expenses)
```

All calculations are derived from the Trip ledger.

---

# 🧪 Testing APIs

Use:

* Postman
* Thunder Client (VS Code)

Add header:

```
Authorization: Bearer <JWT>
```

---

# 🧠 Key Design Decisions

* Trip acts as financial ledger
* Soft deletes using `isActive`
* Sequelize ORM (no raw SQL)
* Global drivers
* Expandable architecture

---

# 🛡 Validation

Request validation handled via:

```
express-validator
```

Ensures:

* Required fields
* Numeric checks
* Safe inputs

---

# 🧩 Future Enhancements

* Excel Export
* Notifications (EMI / Maintenance)
* Cloud Backup
* Offline Sync
* Financial Year Reports
* Passenger Booking (Uber-like)

---



