import { NotFoundPage } from "app/notfound/notfound-page";
import { SignInPage } from "app/signin/signin-page";
import { SignUpPage } from "app/signup/signup-page";
import { RouteConfig } from "common/routing/types";
import { getHomeRoute, getNotFoundRoute, getSignUpRoute } from "./paths";

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
];

export default appRoutes;