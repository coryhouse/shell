import React, { useEffect, useState } from "react";
import { User } from "./types/types";
import { getUser } from "./services/user.service";
import { ShellLayout } from "./ShellLayout";
import { ShellRoutes } from "./Routes";
import { useSearchParams } from "react-router-dom";

// TODO: Fetch these in real app.
const urls: Record<"about" | "home", string> = { about: "/about", home: "/" };

export default function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState("account-one");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  if (!user) return <h1>Loading...</h1>;

  const showShell = searchParams.get("shell") !== "n";

  return (
    <>
      {showShell ? (
        <ShellLayout
          account={account}
          setAccount={setAccount}
          count={count}
          setCount={setCount}
        >
          <ShellRoutes
            account={account}
            count={count}
            urls={urls}
            user={user}
          />
        </ShellLayout>
      ) : (
        <ShellRoutes account={account} count={count} urls={urls} user={user} />
      )}
    </>
  );
}
