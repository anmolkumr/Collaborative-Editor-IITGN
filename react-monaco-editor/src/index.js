import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import CodeCard from './components/CodeCard';
import Head from './components/Nav';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Root/><Head/><CodeCard/></>,
    errorElement: <errorElement/>
  },
  {
    path: "code-editor",
    element: <App />,
  },
  {
    path: "code-editor/#-NXvDDK3Syb9AA06sDfH",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
