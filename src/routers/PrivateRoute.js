import { Route, } from "react-router-dom";
// import useAuth from "../auth/useAuth";
// import rutas from "../helpers/rutas";

export default function PrivateRoute({ hasRole: role, ...rest }) {
    // const location = useLocation();
    // /* console.log(location); */
    // const { user } = useAuth();

    // if (user) return <Redirect to={rutas.home} />

    // if (!user) return <Redirect to={{ pathname: rutas.login, state: { from: location } }} />

    return (
        <Route {...rest} />
    )
}