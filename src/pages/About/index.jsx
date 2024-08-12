import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function AboutPage() {
  const [user, setUser] = useState('mario');

  if (!user) {
    return <Navigate to='/' replace={true} />;
  }

  return (
    <div>
      <h2>About Us</h2>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat non
        saepe obcaecati. Illum deleniti cum nemo maiores a delectus? Eos nobis
        harum sed accusamus at quo, pariatur repudiandae vel nulla.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat non
        saepe obcaecati. Illum deleniti cum nemo maiores a delectus? Eos nobis
        harum sed accusamus at quo, pariatur repudiandae vel nulla.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat non
        saepe obcaecati. Illum deleniti cum nemo maiores a delectus? Eos nobis
        harum sed accusamus at quo, pariatur repudiandae vel nulla.
      </p>

      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default AboutPage;
