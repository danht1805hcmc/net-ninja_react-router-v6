import { Link, useLoaderData } from 'react-router-dom';

export default function CareersPage() {
  const careerList = useLoaderData();

  return (
    <div id='careers'>
      <h3>Careers List</h3>

      {careerList.map(({ id, title, location }, index) => (
        <Link key={index} to={id}>
          <p>{title}</p>
          <p>Based in: {location}</p>
        </Link>
      ))}
    </div>
  );
}

export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers');

  if (!res.ok) {
    throw Error('Could not fetch the careers');
  }

  return res.json();
};
