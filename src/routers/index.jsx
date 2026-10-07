import { createBrowserRouter } from "react-router";
// import App from "../App";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import About from "../pages/About";
import FAQ from "../pages/FAQ";
import Testimony from "../pages/Testimony";
import NotFound from "../pages/NotFound";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'detail/:id',
                element: <Detail />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/testimony',
                element: <Testimony />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);


