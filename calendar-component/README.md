# Calendar View – Interactive UI Component

This repository contains a React + TypeScript calendar component built with Tailwind CSS and Storybook.

## Features
- Month & Week views
- Create / Edit / Delete events (local state via zustand)
- Keyboard & mouse accessible basic interactions
- Responsive layout
- Storybook with 5 stories:
  - Default (sample events)
  - Empty State
  - Week View
  - With Many Events
  - Interactive Demo

## Tech
- React + TypeScript (Vite)
- Tailwind CSS
- Storybook
- date-fns for date handling
- zustand for lightweight state management
- clsx for conditional classes

## Run locally
1. `npm install`
2. `npm run dev` (open http://localhost:5173)
3. `npm run storybook` (open http://localhost:6006)

## Deployment
You can deploy to Vercel or Netlify. A simple workflow:
- Push this project to GitHub.
- Connect the repo in Vercel (Import Project) — Vite is detected automatically.
- Build command: `npm run build`, Output directory: `dist`.

## Storybook & Live Demo
I cannot deploy to Vercel/Netlify from this environment. I've created a complete project ZIP you can download below. Follow the steps above to run locally or deploy to Vercel/Netlify.

