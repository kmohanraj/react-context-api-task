import React from "react";
import ErrorPage from "../components/Error";
import { IAppRouteProps } from "../interface/routes.interfaces";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";

const AppRoutes = (props: IAppRouteProps) => {
  return(<BrowserRouter>
  <Routes>
    {props.routeConfig.map((ele, index) => (
      <Route path={ele.path} element={
        <React.Fragment>
          <Header />
          <ele.component />
        </React.Fragment>
      }
      key={index}
      />
    ))}
    <Route path="*"
     element={<ErrorPage title="404" message="Page Not Found" />}
     />
    <Route/>
  </Routes>
  </BrowserRouter>)
}

export default AppRoutes;