import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, type Role } from "../context/AuthContext";

interface RoleOption {
  value: Role;
  label: string;
  description: string;
}

const ROLES: RoleOption[] = [
  {
    value: "Admin",
    label: "Admin",
    description: "Full control over members, security, and workspace settings.",
  },
  {
    value: "Editor",
    label: "Editor",
    description: "Create, edit, and publish content across the workspace.",
  },
  {
    value: "Viewer",
    label: "Viewer",
    description: "Browse pages and shared reports. Read-only.",
  },
];

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<Role>("Viewer");
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Enter a username to continue.");
      return;
    }
    signIn(username, role);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="login-shell">
      <div className="login-card fade-in">
        <div className="login-logo">MyDashboard</div>
        <h1 className="login-title">Welcome to your workspace</h1>
        <p className="login-sub">Pick a role and a name. No password — this is a demo.</p>

        <form onSubmit={onSubmit} noValidate>
          <div className="field">
            <label className="field-label" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="input-text"
              type="text"
              autoComplete="off"
              placeholder="e.g. Yukifumi"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                if (error) setError("");
              }}
            />
            {error && <div className="error-msg">{error}</div>}
          </div>

          <div className="field">
            <label className="field-label">Role</label>
            <div className="radio-group" role="radiogroup" aria-label="Role">
              {ROLES.map((r) => {
                const selected = role === r.value;
                return (
                  <button
                    type="button"
                    key={r.value}
                    role="radio"
                    aria-checked={selected}
                    className={`radio-btn ${selected ? "radio-btn--selected" : ""}`}
                    onClick={() => setRole(r.value)}
                  >
                    <span className="radio-indicator" aria-hidden>
                      {selected && <span className="radio-dot" />}
                    </span>
                    <span className="radio-content">
                      <span className="radio-label">{r.label}</span>
                      <span className="radio-desc">{r.description}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button type="submit" className="btn-submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
