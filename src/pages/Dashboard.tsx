import { useAuth } from "../context/AuthContext";
import type { Role } from "../context/AuthContext";

interface ControlRow {
  icon: string;
  label: string;
  value?: string;
}

interface PanelConfig {
  title: string;
  subtitle: string;
  rows: ControlRow[];
}

const PANEL_CONFIGS: Record<Role, PanelConfig> = {
  Admin: {
    title: "Admin Controls",
    subtitle: "Manage your application settings, users, and system activity.",
    rows: [
      { icon: "👥", label: "Manage Users" },
      { icon: "📋", label: "View Logs" },
      { icon: "⚙️", label: "System Settings" },
    ],
  },
  Editor: {
    title: "Editor Controls",
    subtitle: "Create, edit, and publish content across the workspace.",
    rows: [
      { icon: "📝", label: "Create New Draft" },
      { icon: "🔍", label: "View Pending Reviews" },
      { icon: "📊", label: "Analytics Overview" },
    ],
  },
  Viewer: {
    title: "Viewer Controls",
    subtitle: "Browse pages and shared reports. Read-only.",
    rows: [
      { icon: "📈", label: "Performance Summary" },
      { icon: "💬", label: "Customer Feedback Digest" },
      { icon: "⚡", label: "Content Velocity Overview" },
    ],
  },
};

export default function Dashboard() {
  const { account } = useAuth();
  if (!account) return null;

  const config = PANEL_CONFIGS[account.role];

  return (
    <div className="fade-in">
      <div className="welcome-section">
        <h1 className="welcome-title">
          Welcome, {account.username} 👋
        </h1>
        <p className="welcome-sub">
          You are signed in as <strong>{account.role}</strong>. Here's your personalised workspace.
        </p>
      </div>

      <div className="simple-card">
        <div className="card-header">
          <h2 className="card-title">{config.title}</h2>
          <p className="card-sub">{config.subtitle}</p>
        </div>

        <div className="simple-rows">
          {config.rows.map((row, index) => (
            <div key={index} className="simple-row">
              <div className="simple-row__left">
                <span className="simple-row__icon">{row.icon}</span>
                <span>{row.label}</span>
              </div>
              {row.value && <span className="simple-row__value">{row.value}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
