# ApplyBoard

ApplyBoard is a responsive job application tracker built with React and Tailwind CSS. It helps users organize job applications across a Kanban-style workflow, track application progress, search saved jobs, and keep data persisted in the browser.

## Features

- Add new job applications with company, role, location, status, and job type
- Organize applications by status: Saved, Applied, Interview, Offer, and Rejected
- Move jobs between statuses using a dropdown
- Delete jobs from the board
- Search jobs by company, role, or location
- View summary stats for total jobs, applied jobs, interviews, and offers
- Persist jobs with localStorage so data stays after refreshing
- Responsive layout built with Tailwind CSS

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- localStorage

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## What I Learned

While building this project, I practiced:

- React components and props
- Passing functions as props
- Managing state with `useState`
- Running side effects with `useEffect`
- Controlled form inputs
- Array methods like `map` and `filter`
- Conditional rendering
- Saving and loading data with `localStorage`
- Styling responsive interfaces with Tailwind CSS

## Future Improvements

- Add drag-and-drop between columns
- Add due dates or follow-up reminders
- Add company links and notes
- Add edit functionality for existing jobs
- Add authentication and database storage
