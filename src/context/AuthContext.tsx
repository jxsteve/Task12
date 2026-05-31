import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
export type Role = "Admin" | "Editor" | "Viewer";

export interface Account {
  username: string;
  role: Role;
}

interface AuthContextValue {
  account: Account | null;
  signIn: (username: string, role: Role) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account | null>(null);

  const signIn = (username: string, role: Role) =>
    setAccount({ username: username.trim(), role });
  const signOut = () => setAccount(null);

  return (
    <AuthContext.Provider value={{ account, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
