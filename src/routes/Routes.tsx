import React, { Suspense } from "react";
import { IRouteConfig } from "../interface/routes.interfaces";
import UsersPage from "../pages/Users";
import AppRoutes from "./AppRoutes";
import Loader from "../components/Loader";
import HomePage from "../pages/Home";

const Routes = () => {
  const config: IRouteConfig[] = [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/users',
      component: UsersPage
    }
  ]

  return(
    <Suspense fallback={<Loader />}>
      <AppRoutes routeConfig={config} />
    </Suspense>
  )
}

export default Routes;