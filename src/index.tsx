import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './page/dashboard/Dashboard';
import SignIn from './page/login/SignIn';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/k8s/admin-client-react/v1">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// function useRoutes(arg0: { path: string; element: JSX.Element; }[]) {
//   throw new Error('Function not implemented.');
// }

