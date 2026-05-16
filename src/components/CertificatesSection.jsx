import { Download } from "lucide-react";

export function CertificatesSection() {
  const certificates = [
    {
      title: "GDG Django Track Certificate",
      issuer: "Google Developer Groups",
      date: "2026",
      filePath: "/certificates/Bekam Yosef Django gdg track certificate.pdf"
    },
    {
      title: "Android Developer Fundamentals",
      issuer: "Udacity",
      date: "2024",
      filePath: "/certificates/Learn the Latest Tech Skills; Advance Your Career _ Udacity android developer fundamentals.pdf"
    },
    {
      title: "Programming Fundamentals",
      issuer: "Udacity",
      date: "2024",
      filePath: "/certificates/Learn the Latest Tech Skills; Advance Your Career _ Udacity programming fundamental.pdf"
    }
  ];

  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-header">
        <h2 className="certificates-title">Certifications</h2>
        <p className="certificates-subtitle">Professional certifications and course completions</p>
      </div>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <a
            key={index}
            href={cert.filePath}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-card"
          >
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
            </div>
            <div className="certificate-action">
              <Download className="download-icon" />
              <span>View Certificate</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
