import { Breadcrumbs } from 'components';
import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
  const routeNavLink = [
    {
      to: '/',
      text: 'Home',
    },
    {
      to: 'about',
      text: 'About',
    },
    {
      to: 'help',
      text: 'Help',
    },
    {
      to: 'careers',
      text: 'Careers',
    },
  ];

  return (
    <div className='root-layout'>
      <header>
        <div className='container'>
          <nav>
            <h1>React Router V6</h1>
            {routeNavLink.map(({ to, text }, index) => (
              <NavLink key={index} to={to}>
                {text}
              </NavLink>
            ))}
          </nav>

          <Breadcrumbs />
        </div>
      </header>

      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default RootLayout;
