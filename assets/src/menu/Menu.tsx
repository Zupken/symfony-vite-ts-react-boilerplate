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
    <nav>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: activeItem === item.id ? '#ddd' : 'transparent',
            }}
            onClick={() => handleItemClick(item.id)}
          >
            <a
              href={item.link}
              style={{
                textDecoration: 'none',
                color: activeItem === item.id ? '#000' : '#555',
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