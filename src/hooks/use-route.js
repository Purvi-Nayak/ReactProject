import { useMemo } from "react"
import { URLS } from "../constant/url"
import Contacts from "../containers/contacts"
import Home from "../containers/home"
import Login from "../containers/auth/login"

const useRoutes = () => {

    const allRoutes = useMemo(() => [
        {
            id: 'root',
            path: URLS.Home,
            element: Home,
            isAuth: true
        },
        {
            id: 'login',
            path: URLS.Login,
            element: Login,
            isAuth: true
        },
        {
            id: 'users',
            path: URLS.Contact,
            element: Contacts,
            isPrivate: true
        },
     
    ], [])

    const authRoutes = useMemo(() => allRoutes.filter(route => route.isAuth), [allRoutes])
    const privateRoutes = useMemo(() => allRoutes.filter(route => route.isPrivate), [allRoutes])

    return { allRoutes, authRoutes, privateRoutes }
}

export default useRoutes