
import { Route } from "react-router-dom";
import { lazy } from "react";
const routes = [
    {
        path: "",
        element: lazy(() => import("./../pages/HomeTemPlate")),
        nested: [
            {
                path: "",
                element: lazy(() => import("./../pages/HomeTemPlate/HomePages"))
            },
            {
                path: "about",
                element: lazy(() => import("./../pages/HomeTemPlate/AboutPages"))
            },
            {
                path: "list-movie",
                element: lazy(() => import("./../pages/HomeTemPlate/ListMoviePages"))
            },
            {
                path: "detail/:id",
                element: lazy(() => import("./../pages/HomeTemPlate/DetailMoviePage/DetailMoviePage"))
            },
        ]
    },
    {
        path: "admin",
        element: lazy(() => import("./../pages/AdminTemPlate")),
        nested: [
            {
                path: "add-movie",
                element: lazy(() => import("./../pages/AdminTemPlate/AddMoviePage"))
            },
            {
                path: "add-user",
                element: lazy(() => import("./../pages/AdminTemPlate/AddUserPage"))
            },
            {
                path: "dashboard",
                element: lazy(() => import("./../pages/AdminTemPlate/DashBoardPage"))
            },
        ]
    },
    {
        path: "auth",
        element: lazy(() => import("./../pages/AdminTemPlate/AuthPage")),
    },
    {
        path: "/hooks-state",
        element: lazy(() => import("../pages/Hooks/State")),
    },
    {
        path: "/hooks-effect",
        element: lazy(() => import("../pages/Hooks/Effect")),
    },
];

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return <Route key={route.path} path={route.path} element={<route.element />}>
                {route.nested.map((item) => {
                    return <Route key={item.path} path={item.path} element={<item.element />} />
                })}
            </Route>

        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}

export default renderRoutes;
