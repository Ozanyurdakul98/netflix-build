import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ErrorPage from "./error-page";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
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
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
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
