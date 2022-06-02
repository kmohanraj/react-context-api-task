import React from "react";

export interface IAppRouteProps {
  routeConfig: IRouteConfig[]
}

export interface IRouteConfig {
  path: string;
  component: React.FC;
}