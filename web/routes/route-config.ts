import { NotFoundPage, SignInPage } from "app";
import { SignUpPage } from "app/signup/signup-page";
import { RouteConfig } from "common/routing/types";
import { getHomeRoute, getNotFoundRoute, getSignUpRoute } from "./routes";

const notFoundPath = getNotFoundRoute();

export const appRoutes: RouteConfig[] = [
    {
        path: getSignUpRoute(),
        component: SignUpPage,
        exact: true,
    },
    {
        path: getHomeRoute(),
        component: SignInPage,
        exact: true,
    },
    {
        path: getNotFoundRoute(),
        component: NotFoundPage,
    },
    {
        to: notFoundPath,
    }
]
debugger
export default appRoutes;