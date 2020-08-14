import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from './AuthService';

const LoggedInRoute = ({ componentChan: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={prop =>
            user ? (
                <Component {...prop} />
            ) : (
                <Redirect to={'/login'} />
            )
            }
        />
    )
}

export default LoggedInRoute;