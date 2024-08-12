import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// layouts
import { CareersLayout, HelpLayout, RootLayout } from './layouts';

// pages
import {
  AboutPage,
  CareerDetail,
  careerDetailLoader,
  careersLoader,
  CareersPage,
  contactAction,
  ContactPage,
  ErrorPage,
  FAQPage,
  HomePage,
} from 'pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<FAQPage />} />
        <Route
          path='contact'
          element={<ContactPage />}
          action={contactAction}
        />
      </Route>

      <Route
        path='careers'
        element={<CareersLayout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<CareersPage />} loader={careersLoader} />
        <Route
          path=':id'
          element={<CareerDetail />}
          loader={careerDetailLoader}
        />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
