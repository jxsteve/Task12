import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { account } = useAuth();
  if (!account) return null;

  const profileData = [
    { label: "Username", value: account.username },
    { label: "Role", value: account.role },
    { label: "Workspace", value: "Personal Workspace" },
    { label: "Time zone", value: "Africa/Lagos · GMT+1" },
    { label: "Email notifications", value: "Enabled" },
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
              <span>{item.label}</span>
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
