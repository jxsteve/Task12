import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { account, signOut } = useAuth();
  const navigate = useNavigate();

  if (!account) return null;

  const onSignOut = () => {
    signOut();
    navigate("/login", { replace: true });
  };

  const badgeClass =
    account.role === "Admin"
      ? "navbar__badge--admin"
      : account.role === "Editor"
      ? "navbar__badge--editor"
      : "navbar__badge--viewer";

  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className="navbar__brand">
        MyDashboard
      </NavLink>

      <div className="navbar__links">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `navbar__link ${isActive ? "navbar__link--active" : ""}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `navbar__link ${isActive ? "navbar__link--active" : ""}`
          }
        >
          Profile
        </NavLink>
        {account.role === "Admin" && (
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `navbar__link ${isActive ? "navbar__link--active" : ""}`
            }
          >
            Settings
          </NavLink>
        )}
      </div>

      <div className="navbar__right">
        <span className="navbar__username">{account.username}</span>
        <span className={`navbar__badge ${badgeClass}`}>{account.role}</span>
        <button className="navbar__logout" onClick={onSignOut}>
          Logout
        </button>
      </div>
    </nav>
  );
}
