import React from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';

export default function CareerDetail() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div id='career-details'>
      <h3>Career Detail for {career.title}</h3>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>

      <div className='detail'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolore
          eaque tempora! Eos dolorum, accusamus exercitationem in quos suscipit
          fugiat dignissimos repellendus asperiores quam, eligendi minima velit
          blanditiis, minus non.
        </p>
      </div>
    </div>
  );
}

export const careerDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:4000/careers/${id}`);

  if (!res.ok) {
    throw Error('Could not find that career');
  }

  return res.json();
};
