import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login/Login.tsx';
import Home from './components/Home/Home.tsx';
import { UserContextProvider } from './Contexts/UserContext.tsx';
import { TeamSelect } from './components/TeamSelect/TeamSelect.tsx';
import {TeamPage} from './components/Team/TeamPage.tsx';
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />
  },{
    path:"/team",
    element: <TeamSelect />
  },
  {
    path:"/teampage",
    element: <TeamPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)
