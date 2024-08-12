import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = '';

  const crumbList = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '');
  const crumbs = crumbList.map((crumb, index) => {
    currentLink += `/${crumb}`;

    return (
      <div key={index} className='crumb'>
        <Link to={currentLink}>{crumb}</Link>
      </div>
    );
  });

  return <div className='breadcrumbs'>{crumbs}</div>;
}
