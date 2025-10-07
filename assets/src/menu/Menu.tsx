import React, { useState } from 'react';

const Menu: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const menuItems = [
    { id: 'home', label: 'Home', link: '/' },
    { id: 'about', label: 'About', link: '/about' },
    { id: 'contact', label: 'Contact', link: '/contact' },
  ];

  const handleItemClick = (id: string) => {
    setActiveItem(id);
  };

  return (
    <nav
      style={{
        backgroundColor: '#f8f9fa',
        padding: '10px 20px',
        position: 'fixed', // Fixes the menu at the top
        top: 0,
        left: 0,
        width: '100%', // Makes the menu span the full width
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow
        zIndex: 1000, // Ensures the menu stays above other content
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        {menuItems.map((item) => (
          <li
            key={item.id}
            style={{
              margin: '0 15px',
              cursor: 'pointer',
            }}
            onClick={() => handleItemClick(item.id)}
          >
            <a
              href={item.link}
              style={{
                textDecoration: 'none',
                color: activeItem === item.id ? '#007bff' : '#555',
                fontWeight: activeItem === item.id ? 'bold' : 'normal',
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;