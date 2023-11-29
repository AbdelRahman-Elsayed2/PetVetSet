import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import SignupController from './Controller/SignupController';
import SigninController from './Controller/SigninController';
import GoogleOAuthSigninController from './Controller/GoogleOAuthSigninController';
import GoogleOAuthSignupController from './Controller/GoogleOAuthSignupController';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Signin",
    element: <Signin></Signin>
  },
  {
    path: '/Signup',
    element: <Signup></Signup>
  },
  {
    path: '/SignupController',
    element: <SignupController></SignupController>
  },
  {
    path: '/SigninController',
    element: <SigninController></SigninController>
  },
  {
    path: '/GoogleOAuthSigninController',
    element: <GoogleOAuthSigninController></GoogleOAuthSigninController>
  },
  {
    path: '/GoogleOAuthSignupController',
    element: <GoogleOAuthSignupController></GoogleOAuthSignupController>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='549203752943-9v55077dqcf3vlpjgmpnhuqoq9cv7rmt.apps.googleusercontent.com'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
