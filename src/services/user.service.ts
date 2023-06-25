import { User } from "src/types/types";

export async function getUser(): Promise<User> {
  // In the real app this would use auth info.
  return { id: 1, name: "John Doe" };
}
