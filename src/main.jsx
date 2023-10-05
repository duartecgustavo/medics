import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import App from './App';
import ErrorPage from "./pages/ErrorPage.jsx";
import Login from './pages/LoginPage.jsx';
import RegisterPatientPage from './pages/RegisterPatientPage.jsx';
import PatientProfilePage from './pages/PatientProfile.jsx';
import PatientsPage from './pages/PatientsPage.jsx';
import Footer from './components/shared/Footer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App /></div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registerPatient",
    element: <RegisterPatientPage />,
  },
  {
    path: "/patients",
    element: <PatientsPage />,
  },
  {
    path: "/patientProfile",
    element: <PatientProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
