# ActiveCollab

> A full-stack project management platform built with Angular 4 and a GraphQL API.

---

## About

ActiveCollab is a collaborative project management web application that enables teams to create and track projects, manage team members, file bug tickets, and stay up to date through a news feed — all from a role-aware dashboard interface.

The app is split into two independently runnable services: an **Angular 4 frontend** and a **Node.js/Express/GraphQL backend** backed by a MySQL database via Sequelize ORM.

---

## Features

- **User authentication** — Sign up, sign in, forgot password, and role-based access (admin vs. regular user)
- **Project management** — Create, view, update settings, track status and percent completion
- **Team management** — Assemble teams per project, view members, manage joining status
- **Bug ticketing** — Create, view, resolve, and close bug tickets scoped to projects
- **To-do tracking** — Create, view, and resolve to-do items
- **News feed** — Activity feed for staying up to date across projects
- **Admin dashboard** — Separate admin view with elevated controls
- **User profiles** — View and update personal profile information
- **reCAPTCHA integration** — Signup form includes Google reCAPTCHA

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Angular 4, TypeScript, Angular Router, Angular Material Icons |
| Backend | Node.js, Express, Babel (ES6+) |
| API | GraphQL (`express-graphql`), GraphiQL |
| ORM | Sequelize |
| Database | MySQL |
| Auth guards | Angular route guards (admin + user) |
| Testing | Karma, Jasmine, Protractor |

---

## Project Structure

```
ActiveCollab/
├── backend/
│   ├── db.js          # Sequelize models and DB connection
│   ├── schema.js      # Full GraphQL schema (types, queries, mutations)
│   ├── server.js      # Express server entry point (port 4000)
│   └── index.js       # Babel bootstrap
└── frontend/
    ├── src/app/
    │   ├── dashboard-components/   # Feature components (projects, teams, bugs, todos, etc.)
    │   ├── admin-dashboard/        # Admin-only views
    │   ├── user-dashboard/         # User-facing dashboard
    │   ├── sign-up / sign-in       # Auth flows
    │   └── app.module.ts           # Root module and routing
    └── server.js      # Express server to serve the Angular build
```

---

## Getting Started

### Prerequisites

- Node.js `8.2.1`, npm `5.3.0`
- MySQL running locally
- A database named `collabPro` with root credentials configured

### Backend

```bash
cd backend
npm install
npm start
# GraphQL API running at http://localhost:4000/graphql
# GraphiQL explorer available in browser
```

### Frontend

```bash
cd frontend
npm install
npm start
# App served at http://localhost:4200 (default Angular dev server)
```

> To build for production: `npm run build` inside the `frontend/` directory.

---

## Database

The backend uses Sequelize to define and sync the following tables:

- `users` — user accounts with profile fields, role (`userType`), and company info
- `projects` — project records with budget, dates, status, and completion percentage
- `teams` — join table linking users to projects with status and joining date
- `timelines` — milestone/timeline entries per project
- `todos` — task items linked to projects
- `bugtickets` — bug reports with priority, status, and resolution tracking
- `newsfeeds` — activity entries surfaced in the news feed

---

## API

The GraphQL endpoint is available at `http://localhost:4000/graphql` with GraphiQL enabled. It exposes queries and mutations for all major entities (users, projects, teams, todos, bug tickets, news feeds).

---

## License

MIT — see [LICENSE](./LICENSE) for details.

---

## Author

**Abhishek Roy**
