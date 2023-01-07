import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ErrorPage from "./error-page";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

function App() {
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
      } else {
        //loged out
      }
    });
    return unsubscribe;
  });

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
