import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { User } from "./types/types";
import { remotes } from "./services/remote.service";
import { getUser } from "./services/user.service";

// TODO: Fetch these in real app.
const urls: Record<"about" | "home", string> = { about: "/about", home: "/" };

var buildDate = process.env.BUILD_DATE;

export default function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  if (!user) return <h1>Loading...</h1>;

  return (
    <>
      <header style={{ backgroundColor: "lightblue" }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {remotes.map(({ navLink }) => (
              <li key={navLink.text}>
                <Link to={navLink.path}>{navLink.text}</Link>
              </li>
            ))}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <p>Shell Build Date: {buildDate}</p>
        <p>Shell count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment shell count
        </button>
      </header>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="about" element={<h2>About</h2>} />
        {remotes.map(({ navLink, lazy }) => {
          const LazyRemote = lazy;
          return (
            <Route
              key={navLink.path}
              path={navLink.path + "/*"}
              element={
                <Suspense fallback="Loading...">
                  <LazyRemote
                    parentCount={count}
                    urls={urls}
                    user={user}
                    baseUrl={navLink.path}
                  />
                </Suspense>
              }
            />
          );
        })}
        <Route path="*" element={<h2>404 - Not Found</h2>} />
      </Routes>
    </>
  );
}
