# POS Software

A web-based Point-of-Sale system with a beautiful UI, dashboard, super admin, user management, sales, reporting, stock/inventory, real-time sales, custom payments, and role-based access.

## Features

- Responsive dashboard with stats and charts
- Super admin with full control
- Login authentication (JWT)
- Sales & reporting
- Real-time sales
- Stock & inventory management
- Custom payment methods
- User management with access controls

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Setup

1. Copy `.env.example` to `.env` in backend and fill in your MongoDB URI and JWT secret.
2. Install dependencies in both `backend/` and `frontend/`.
3. Start backend: `node backend/app.js`
4. Start frontend: `npm start` in `frontend/`
5. Visit `http://localhost:3000`

## Deployment

Initialize git, commit, and push to GitHub:
```sh
git init
git add .
git commit -m "Initial POS system scaffold"
git push -u origin main