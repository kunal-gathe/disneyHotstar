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
import Tv from "./components/Tv";
import TvShows from "./components/TvShows";
import Category from "./components/Category";
import Profile from "./components/Profile";

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
          path: "/serial",
          element: <TvShows />,
        },
        {
          path: "/search",
          element: <Search />,
          children: [
            {
              path: "movies",
              element: <MoviesDtails />,
            },
          ],
        },
        {
          path: "/tv",
          element: <Tv />,
          children:[
            {
              path:"serial",
              element: <TvShows />
            }
          ]
        },
        {
          path: "Category",
          element: <Category />
        },
        {
          path: "userprofile",
          element: <Profile />
        }
      ],
      // errorElement: <Error />,
    },
  ]);

  return (
    <div className="overflow-y-scroll no-scrollbar bg-slate-950">
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
