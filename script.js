// Roadmap
// This is what we are going to study in this Tutorial
// 1. Create React App
// 2. Components (Functional, Class)
// 3. JSX
// 4. Props, State
// 5. useState, useEffect
// 6. Components Lifecycle Method
// 7. Conditional Rendering
// 8. List & Keys
// 9. Basic Form Handling
// 10. React Project Structure
// 11. Routing React Router
// 12. Programmatic Navigation
// 13. Set up JSON Navigation
// 14. API Calls (Axios)
// 15. React CRUD Operations
// 16.React Search Filter
// 17. React Hooks

function MyButton() {
  return <button>I'm a button</button>;
}

// HTML is a markup language.
// But in React, we write this markup using JSX — a syntax that looks like HTML inside JavaScript.

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

// composition: placing components inside other components to build more complex, but organized UI.
