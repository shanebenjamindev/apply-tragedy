import { Route } from 'react-router-dom'
import { lazy } from 'react'

const routes = [
    {
        path: "",
        element: lazy(() => import("../view/Layout/Layout")),
        nested: [
            {
                path: "/",
                element: lazy(() => import("../view/pages/Home/Home")),
            },
            {
                path: "/apply",
                element: lazy(() => import("../view/pages/Jobs/Jobs")),
            },

        ]
    },
    {
        path: "/sign-in",
        element: lazy(() => import("../view/pages/Login/Login")),
    },
    {
        path: "/sign-up",
        element: lazy(() => import("../view/pages/SignUp/SignUp")),
    },
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested) {
            return (
                <Route key={route.path} path={route.path} element={<route.element />}>
                    {route.nested.map((item) => {
                        return <Route key={item.path} path={item.path} element={< item.element />} />
                    })}
                </Route>
            )
        } else {
            return <Route key={route.path} path={route.path} element={< route.element />} />
        }
    })
}
export default renderRoutes;