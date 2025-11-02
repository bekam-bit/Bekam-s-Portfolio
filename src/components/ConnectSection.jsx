import { Github, Linkedin, Mail } from "lucide-react";

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
      link: "https://www.linkedin.com/in/bekam-yoseph",
      Icon: Linkedin
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

