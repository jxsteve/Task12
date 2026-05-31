import { useState } from "react";

interface Toggle {
  key: string;
  label: string;
  description: string;
  icon: string;
  value: boolean;
}

export default function Settings() {
  const [settings, setSettings] = useState<Toggle[]>([
    {
      key: "twofa",
      label: "Require two-step verification",
      description: "Adds a second factor for workspace members.",
      icon: "🔒",
      value: true,
    },
    {
      key: "sso",
      label: "Mandate SSO for new members",
      description: "Requires new invitees to sign in using identity provider.",
      icon: "🔑",
      value: false,
    },
    {
      key: "invites",
      label: "Allow open invitations",
      description: "Allows both editors and admins to invite members.",
      icon: "✉️",
      value: false,
    },
    {
      key: "exports",
      label: "Permit data exports",
      description: "Enables members to download workspace data.",
      icon: "⬇️",
      value: true,
    },
  ]);

  const toggleSetting = (key: string) => {
    setSettings(
      settings.map((t) => (t.key === key ? { ...t, value: !t.value } : t))
    );
  };

  return (
    <div className="fade-in">
      <div className="welcome-section">
        <h1 className="welcome-title">Settings</h1>
        <p className="welcome-sub">Configure workspace security, access policies, and data preferences.</p>
      </div>

      <div className="simple-card mb-24">
        <div className="card-header">
          <h2 className="card-title">Security &amp; Membership</h2>
          <p className="card-sub">Global configuration options for this workspace.</p>
        </div>

        <div className="simple-rows">
          {settings.map((t) => (
            <div
              key={t.key}
              className="simple-row"
              onClick={() => toggleSetting(t.key)}
              style={{ padding: "12px 20px" }}
            >
              <div className="simple-row__left">
                <span className="simple-row__icon">{t.icon}</span>
                <div>
                  <div style={{ fontWeight: 600 }}>{t.label}</div>
                  <div className="caption muted" style={{ marginTop: 2 }}>{t.description}</div>
                </div>
              </div>
              <button
                className={`switch ${t.value ? "switch--on" : ""}`}
                aria-label={t.label}
                type="button"
              >
                <span className="switch__thumb" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="simple-card" style={{ borderColor: "rgba(239, 68, 68, 0.2)" }}>
        <div className="card-header">
          <h2 className="card-title" style={{ color: "var(--accent-red)" }}>Danger Zone</h2>
          <p className="card-sub">Irreversible workspace administration actions.</p>
        </div>
        <div className="flex-between">
          <div>
            <div style={{ fontWeight: 600 }}>Reset Workspace</div>
            <div className="caption muted" style={{ marginTop: 2 }}>
              Permanently remove all members, draft data, and settings.
            </div>
          </div>
          <button
            className="btn-action"
            style={{
              color: "white",
              backgroundColor: "var(--accent-red)",
              borderColor: "var(--accent-red)",
            }}
            onClick={() => alert("Workspace reset initiated.")}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
