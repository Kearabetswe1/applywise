# Nestwork

ApplyWise is a responsive graduate job-search website starter built with React, TypeScript, Vite, and React Router.

## Features in this starter
- Responsive landing page
- Register and login screens
- Job discovery with search and category filters
- Job details and apply-out link
- Save/bookmark jobs
- Application tracker
- Profile editor and CV file selection
- Dashboard summary
- Demo jobs clearly labelled as sample listings

## Run locally
Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Important prototype notes
This version is a front-end prototype. Authentication, profile data, saved jobs, and application tracking use the browser's `localStorage` so you can test the user flow. This is **not secure production authentication** and should not be used for real personal data. CV selection is currently local to the browser session; files are not uploaded to a server.

