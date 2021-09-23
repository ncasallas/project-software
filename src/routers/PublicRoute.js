import { Route } from "react-router-dom";
// import useAuth from "../auth/useAuth";
// import rutas from "../helpers/rutas";

export default function PublicRoute(props) {
    // const { user } = useAuth();

    // if (user) return <Redirect to={rutas.projects} />

    return (
        <Route {...props} />
    )
}