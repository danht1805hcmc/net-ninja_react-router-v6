import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HelpLayout() {
  const routeNavLink = [
    {
      to: 'faq',
      text: 'View the FAQ',
    },
    {
      to: 'contact',
      text: 'Contact US',
    },
  ];

  return (
    <div className='help-layout'>
      <h2>Website help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        totam asperiores. Amet nostrum at consequuntur tenetur sint nobis, quo
        aliquam esse cupiditate temporibus eveniet, natus totam, pariatur
        quibusdam delectus nemo.
      </p>

      <nav>
        {routeNavLink.map(({ to, text }, index) => (
          <NavLink key={index} to={to}>
            {text}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}

export default HelpLayout;
