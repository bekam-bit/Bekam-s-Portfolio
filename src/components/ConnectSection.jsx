import { Github, Linkedin, Mail } from "lucide-react";

function LeetCodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.5 3.5l-7 7a3 3 0 0 0 0 4.24l7 7 1.42-1.42-7-7a1 1 0 0 1 0-1.4l7-7L15.5 3.5zM8 11.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
}

function CodeforcesIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 17h3V7H4v10zm6 0h3V4h-3v13zm6 0h3V10h-3v7z" />
    </svg>
  );
}

export function ConnectSection() {
  const connections = [
    {
      platform: "GitHub",
      username: "bekam-bit",
      link: "https://github.com/bekam-bit",
      Icon: Github
    },
    {
      platform: "LinkedIn",
      username: "Bekam Yoseph",
      link: "https://www.linkedin.com/in/bekam-yoseph-771123296/",
      Icon: Linkedin
    },
    {
      platform: "LeetCode",
      username: "bekamyoseph1",
      link: "https://leetcode.com/u/bekamyoseph1/",
      Icon: LeetCodeIcon
    },
    {
      platform: "Codeforces",
      username: "bekamyoseph13",
      link: "https://codeforces.com/profile/bekamyoseph13",
      Icon: CodeforcesIcon
    },
    {
      platform: "Email",
      username: "bekamyoseph1@gmail.com",
      link: "mailto:bekamyoseph1@gmail.com",
      Icon: Mail
    }
  ];

  return (
    <section id="contact" className="connect-section">
      <div className="connect-header">
        <h2 className="connect-title">Let's Connect</h2>
        <p className="connect-subtitle">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </div>
      <div className="connect-grid">
        {connections.map((connection) => (
          <a
            key={connection.platform}
            href={connection.link}
            target="_blank"
            rel="noopener noreferrer"
            className="connect-card"
          >
            <div className="connect-icon">
              <connection.Icon className="icon" />
            </div>
            <h3 className="connect-platform">{connection.platform}</h3>
            <p className="connect-username">{connection.username}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

