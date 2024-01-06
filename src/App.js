import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Error from "./components/Error";
import MoviesDtails from "./components/MoviesDtails";
import Search from "./components/Search";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/movies",
          element: <MoviesDtails />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
      errorElement: <Error />
    },
  ]);

  return (
    <div className="overflow-y-scroll no-scrollbar">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
