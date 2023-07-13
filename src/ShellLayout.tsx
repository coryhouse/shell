import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { remotes } from "./services/remote.service";
import { Language, languages } from "./types/types";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ErrorFallback";

var buildDate = process.env.BUILD_DATE;

type ShellLayoutProps = {
  children: ReactNode;
  account: string;
  setAccount: (account: string) => void;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  language: Language;
  setLanguage: (language: Language) => void;
};

export function ShellLayout({
  children,
  account,
  setAccount,
  count,
  setCount,
  language,
  setLanguage,
}: ShellLayoutProps) {
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
            {account === "account-one" && (
              <li>
                <Link to="/">
                  This link only displays when account-one is selected
                </Link>
              </li>
            )}
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <select value={account} onChange={(e) => setAccount(e.target.value)}>
          <option value="account-one">Account One</option>
          <option value="account-two">Account Two</option>
        </select>

        <br />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
        >
          {languages.map((language) => (
            <option key={language} value={language}>
              {language === "en" ? "English" : "Spanish"}
            </option>
          ))}
        </select>

        <p>Shell Build Date: {buildDate}</p>
        <p>Shell count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment shell count
        </button>
      </header>
      <main>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ErrorBoundary>
      </main>
    </>
  );
}
