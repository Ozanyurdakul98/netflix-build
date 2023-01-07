import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ErrorPage from "./error-page";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const router = createBrowserRouter(
    user
      ? [
          {
            path: "/",
            element: <HomeScreen />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/profile",
            element: <ProfileScreen />,
            errorElement: <ErrorPage />,
          },
        ]
      : [
          {
            path: "/",
            element: <LoginScreen />,
            errorElement: <ErrorPage />,
          },
        ]
  );

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
        dispatch(logout());
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
