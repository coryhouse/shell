import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { User } from "./types/types";

// Lazy load remotes so the initial page load only loads immediately necessary remotes.
// TODO: Improve types
const RemoteOne = lazy(() => import("remote1/RemoteOne"));
const RemoteTwo = lazy(() => import("remote2/RemoteTwo"));

// TODO: Fetch these in real app.
const urls: Record<"about" | "home", string> = { about: "/about", home: "/" };
const user: User = { id: 1, name: "John Doe" };

var buildDate = process.env.BUILD_DATE;

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header style={{ backgroundColor: "lightblue" }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/remote1">Remote 1</Link>
            </li>
            <li>
              <Link to="/remote2">Remote 2</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <p>Shell Build Date: {buildDate}</p>
        <p>Shell count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment shell counter
        </button>
      </header>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route
          path="remote1/*"
          element={
            <Suspense fallback="Loading...">
              <RemoteOne
                parentCount={count}
                urls={urls}
                user={user}
                baseUrl="/remote1"
              />
            </Suspense>
          }
        />
        <Route
          path="remote2/*"
          element={
            <Suspense fallback="Loading...">
              <RemoteTwo
                parentCount={count}
                urls={urls}
                user={user}
                baseUrl="/remote2"
              />
            </Suspense>
          }
        />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </>
  );
}
