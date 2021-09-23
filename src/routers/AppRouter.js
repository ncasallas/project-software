import React from "react";
import { Switch, Route } from 'react-router-dom'
import roles from "../helpers/roles";
import rutas from "../helpers/rutas";
import AccountPage from "../pages/AccountPage";
import UsersPage from "../pages/admin/UsersPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
    return (
        <Switch>
            <PublicRoute exact path={rutas.home} component={HomePage} />
            <PublicRoute exact path={rutas.login} component={LoginPage} />
            <PublicRoute exact path={rutas.register} component={RegisterPage} />
            <PrivateRoute exact path={rutas.account} component={AccountPage} />
            <PrivateRoute exact path={rutas.projects} component={ProjectsPage} />
            <PrivateRoute exact path={rutas.project()} component={ProjectPage} />
            <PrivateRoute hasRoles={roles.admin} exact path={rutas.admin.users} component={UsersPage} />

            <Route path="*" component={NotFoundPage} />
        </Switch>
    )
}