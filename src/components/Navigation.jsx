import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  // Initialize theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="nav-header">
      <div className="nav-header-container">

        {/* Logo/Name */}
        <a href="#home" className="nav-logo-link">
          Bekam
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-desktop-link"
            >
              {item.name}
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
            {isDarkMode ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="mobile-icon" /> : <Menu className="mobile-icon" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="mobile-menu-link"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }}
            className="mobile-theme-toggle"
          >
            {isDarkMode ? <Sun className="theme-icon" /> : <Moon className="theme-icon" />}
            Toggle Theme
          </button>
        </div>
      )}
    </header>
  );
}