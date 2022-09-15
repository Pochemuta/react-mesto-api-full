import React from "react";
import { Redirect } from "react-router-dom"

const ProtectedRoute = ({ component: Component, ...props}) => {
            return props.isLoggedIn ? <Component {...props}/> : <Redirect to="/sign-in" />

}

export default ProtectedRoute