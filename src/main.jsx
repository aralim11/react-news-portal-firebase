import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CategoryNews from "./pages/CategoryNews.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router";
import HomeLayout from './layouts/HomeLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import NewsDetails from './pages/NewsDetails.jsx';
import { PrivateRoute } from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={`/category/01`}></Navigate>
      },
      {
        path: "/category/:id",
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element: <CategoryNews></CategoryNews>,
      }
    ]
  },
  {
    path: "/news/:id",
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>
      },
      {
        path: "/auth/register",
        element: <Register></Register>
      },
    ]
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
