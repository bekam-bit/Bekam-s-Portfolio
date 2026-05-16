const TECHNOLOGIES = [
  {
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"/>
      </svg>
    )
  },
  {
    name: "Python",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 3 7.647 3L7.62 5.859h4.213v.645H5.647s-2.647-.3-2.647 4.013 0 3.125 0 3.125h1.634v-2.003s-.088-2.647 2.647-2.647h4.304zm-.281-5.691c-.464 0-.84-.414-.84-.924s.376-.923.84-.923c.463 0 .84.413.84.923s-.377.924-.84.924z"/>
        <path d="M18.353 9.074h-1.634v2.003s.088 2.647-2.647 2.647h-4.328s-2.432-.039-2.432 2.35v3.951S7.286 22 12.064 22c4.574 0 4.289 0 4.289 0l.027-2.859h-4.213v-.645h6.186s2.647.3 2.647-4.013 0-3.125 0-3.125h-1.647v2.003zm-4.007 9.617c.464 0 .84.414.84.924s-.376.923-.84.923c-.463 0-.84-.413-.84-.923s.377-.924.84-.924z"/>
      </svg>
    )
  },
  {
    name: "MySQL",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="bold">MySQL</text>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <ellipse cx="12" cy="7" rx="6" ry="2" />
        <path d="M6 7v6c0 1.1 3 2 6 2s6-.9 6-2V7" />
      </svg>
    )
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    )
  },
  {
    name: "CSS3",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    )
  },
  {
    name: "HTML5",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    )
  },
  {
    name: "Git",
    category: "Tools",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    )
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  },
  {
    name: "Vercel",
    category: "Tools",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M24 22.525H0l12-21.05 12 21.05z"/>
      </svg>
    )
  }
  ,
  {
    name: "Django",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M5 5h14v14H5V5zm2 2v10h10V7H7zm2 2h6v2H9V9zm0 3h6v2H9v-2z"/>
      </svg>
    )
  },
  {
    name: "Redis",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M12 2l9 4-9 4-9-4 9-4zm-7 6l7 3 7-3v8l-7 3-7-3V8zm0 10l7 3 7-3v2l-7 3-7-3v-2z"/>
      </svg>
    )
  },
  {
    name: "Render",
    category: "Deployment",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M4 5h16v14H4V5zm2 2v10h12V7H6zm2 2h8v2H8V9zm0 3h5v2H8v-2z"/>
      </svg>
    )
  },
  {
    name: "Neon",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M12 2l8 4v12l-8 4-8-4V6l8-4zm0 2.2L6 7v10l6 3.2 6-3.2V7l-6-2.8zM9 8h6v2H9V8zm0 3h6v2H9v-2z"/>
      </svg>
    )
  },
  {
    name: "Web socket",
    category: "Realtime",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M4 7h16v10H4V7zm2 2v6h12V9H6zm2 1.5h8v3H8v-3z"/>
      </svg>
    )
  },
  {
    name: "AI",
    category: "Technology",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M12 2l2.5 5.1L20 9.6l-5 4.9L16.2 22 12 19.7 7.8 22 9 14.5 4 9.6l5.5-2.5L12 2zm0 5.1L10.8 10 8 11.1l2.4 2.3-.6 3.2L12 15l2.2 1.6-.6-3.2L16 11.1 13.2 10 12 7.1z"/>
      </svg>
    )
  },
  {
    name: "Resend",
    category: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M4 6h16v12H4V6zm2 2v1.2l6 3.8 6-3.8V8H6zm12 8V11l-6 3.8L6 11v5h12z"/>
      </svg>
    )
  }
];

const SKILLS = [
  {
    name: "Programming",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold">DEV</text>
      </svg>
    )
  },
  {
    name: "Project leadership",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M12 2l4 7H8l4-7zm0 20l-4-7h8l-4 7zM2 9l7 4-7 4V9zm20 0v8l-7-4 7-4z"/>
      </svg>
    )
  },
  {
    name: "System Design",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/>
      </svg>
    )
  },
  {
    name: "Data Structures & Algorithms (DSA)",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M6 18h12v2H6v-2zm0-4h8v2H6v-2zm0-4h12v2H6V10zM6 6h16v2H6V6z"/>
      </svg>
    )
  },
  {
    name: "Database Management",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <ellipse cx="12" cy="6" rx="7" ry="3"/>
        <path d="M5 6v5c0 1.66 3.13 3 7 3s7-1.34 7-3V6c0 1.66-3.13 3-7 3S5 7.66 5 6zm0 5v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5"/>
      </svg>
    )
  },
  {
    name: "Version Control (Git & Github)",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M12 2l10 10-10 10L2 12 12 2zm0 3.5L5.5 12 12 18.5 18.5 12 12 5.5z"/>
      </svg>
    )
  },
  {
    name: "Testing and Debugging",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M10 2h4v2h-4V2zm-3 4h10v2H7V6zm1 4h8l1 10H7l1-10zm2 2v6h2v-6h-2zm4 0v6h2v-6h-2z"/>
      </svg>
    )
  },
  {
    name: "Communication",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M4 4h16v11H7l-3 3V4zm3 4h10v2H7V8zm0 3h7v2H7v-2z"/>
      </svg>
    )
  },
  {
    name: "Problem-Solving",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M9 21h6v-1H9v1zm3-19C7.9 2 5 4.9 5 8c0 2.2 1.2 3.6 2.7 5.3.8.9 1.3 1.5 1.6 2.2h5.4c.3-.7.8-1.3 1.6-2.2C18.8 11.6 20 10.2 20 8c0-3.1-2.9-6-8-6zm-2 9c-1.1-1.2-2-2.2-2-4 0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.8-.9 2.8-2 4H10z"/>
      </svg>
    )
  },
  {
    name: "Collaboration & Teamwork",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zM8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3zm0 2c-2.7 0-8 1.3-8 4v3h10v-3c0-1.1.3-2.1.8-3-1.1-.6-2.4-1-3.8-1zm8 0c-.9 0-1.8.1-2.6.3.9 1 1.6 2.3 1.6 3.7v3h9v-3c0-2.7-5.3-4-8-4z"/>
      </svg>
    )
  },
  {
    name: "Adaptability",
    category: "Skill",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="skill-svg-icon">
        <path d="M12 2l3.5 5.5H14V13h5.5L12 22l-7.5-9H10V7.5H8.5L12 2z"/>
      </svg>
    )
  }
];

const SkillGroup = ({ title, subtitle, items }) => (
  <div className="skills-group-card">
    <div className="skills-group-header">
      <h3 className="skills-group-title">{title}</h3>
      <p className="skills-group-subtitle">{subtitle}</p>
    </div>
    <div className="skills-grid-container">
      {items.map((skill) => (
        <div key={skill.name} className="skill-card-item">
          <div className="skill-icon-wrapper">
            {skill.icon}
          </div>
          <h3 className="skill-name-text">{skill.name}</h3>
          <p className="skill-category-text">{skill.category}</p>
        </div>
      ))}
    </div>
  </div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="skills-title">Skills & Technologies</h2>
        <p className="skills-subtitle">Tools, technologies, and strengths I work with</p>
      </div>
      <div className="skills-groups">
        <SkillGroup
          title="Technologies"
          subtitle="Technical tools and stacks I use to build products"
          items={TECHNOLOGIES}
        />
        <SkillGroup
          title="Skills"
          subtitle="Personal and professional strengths I bring to teams"
          items={SKILLS}
        />
      </div>
    </section>
  );
}
