import React from "react";

interface IErrorProps {
  title: string;
  message?: string; 
}

const ErrorPage = (props: IErrorProps) => {
  return(
    <div className="d-flex align-items-center justify-content-center vh-100">
      <h1>{props.title}</h1>
      <h5>{props.message}</h5>
    </div>
  )
}

export default ErrorPage;