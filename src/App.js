import React from 'react'
import Room from './pages/Room'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import {AuthProvider} from './AuthService'
import LoggedInRoute from './LoggedInRoute'

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    {/* ...restは exact path='/'  (room以外)*/}
                    <LoggedInRoute exact path='/' componentChan={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App