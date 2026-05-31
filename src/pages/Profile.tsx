import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { account } = useAuth();
  if (!account) return null;

  const profileData = [
    { icon: "👤", label: "Username", value: account.username },
    { icon: "◐", label: "Role", value: account.role },
    { icon: "⌂", label: "Workspace", value: "Personal Workspace" },
    { icon: "⌚", label: "Time zone", value: "Africa/Lagos · GMT+1" },
    { icon: "✉", label: "Email notifications", value: "Enabled" },
  ];

  return (
    <div className="fade-in">
      <div className="welcome-section">
        <h1 className="welcome-title">Your Profile</h1>
        <p className="welcome-sub">Manage your personal details and workspace settings.</p>
      </div>

      <div className="simple-card">
        <div className="card-header">
          <h2 className="card-title">Account Information</h2>
          <p className="card-sub">Core profile data associated with your session.</p>
        </div>

        <div className="simple-rows">
          {profileData.map((item, index) => (
            <div key={index} className="simple-row" style={{ cursor: "default" }}>
              <div className="simple-row__left">
                <span className="simple-row__icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <span className="simple-row__value" style={{ fontWeight: 600, color: "var(--text-main)" }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
