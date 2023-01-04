import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ErrorPage from "./error-page";
import LoginScreen from "./screens/LoginScreen";

const container = document.getElementById("root");
const root = createRoot(container);
const user = null;
const router = createBrowserRouter([
  user
    ? {
        path: "/",
        element: <HomeScreen />,
        errorElement: <ErrorPage />,
      }
    : {
        path: "/",
        element: <LoginScreen />,
        errorElement: <ErrorPage />,
      },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='app'>
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
