import React, { useEffect, useState } from "react";
import { User } from "./types/types";
import { getUser } from "./services/user.service";
import { ShellLayout } from "./ShellLayout";
import { ShellRoutes } from "./Routes";

// TODO: Fetch these in real app.
const urls: Record<"about" | "home", string> = { about: "/about", home: "/" };

export default function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<User | null>(null);
  const [account, setAccount] = useState("account-one");

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  if (!user) return <h1>Loading...</h1>;

  return (
    <ShellLayout
      account={account}
      setAccount={setAccount}
      count={count}
      setCount={setCount}
    >
      <ShellRoutes account={account} count={count} urls={urls} user={user} />
    </ShellLayout>
  );
}
