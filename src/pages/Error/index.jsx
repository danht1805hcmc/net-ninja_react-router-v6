import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  const errorCode = {
    404: 'Page Not Found',
  };

  console.log(error);

  return (
    <div id='error-page'>
      <h2>
        {error.message || errorCode[error.status] || 'Something went wrong'} !
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illo
        reprehenderit natus, distinctio tempore iure quisquam non voluptatibus
        libero eaque atque est numquam consectetur repellendus odit reiciendis
        vero debitis. Vitae?
      </p>

      <p>
        Go to the <Link to='/'>Homepage</Link>.
      </p>
    </div>
  );
}

export default ErrorPage;
