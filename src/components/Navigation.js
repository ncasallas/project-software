import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import roles from '../helpers/roles';
import rutas from '../helpers/rutas'

export default function Navigation() {
    const { logout, user } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variante="dark" bg="secondary">
            <Navbar.Brand as={NavLink} to={rutas.home}>
                Gestor de tareas
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {user && user?.rol === roles.admin ? (
                        <NavDropdown title="Admin">
                            <NavDropdown.Item as={NavLink} to={rutas.admin.users}>Usuarios</NavDropdown.Item>
                        </NavDropdown>
                    ) : user && (
                        <Nav.Link as={NavLink} to={rutas.projects}>
                            Proyectos
                        </Nav.Link>
                    )}
                </Nav>
                <Nav>
                    {!user ? (
                        <>
                            <Nav.Link as={NavLink} to={rutas.login}>Iniciar Sesión</Nav.Link>
                            <Nav.Link as={NavLink} to={rutas.register}>Registrarse</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={NavLink} to={rutas.account}>Mi cuenta</Nav.Link>
                            <Nav.Link as={NavLink} to={rutas.login} onClick={logout}>Cerras Sesión</Nav.Link>
                        </>
                    )}

                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}