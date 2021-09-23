import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import rutas from "../helpers/rutas"

export default function HomePage(){
    return (
        <Container>
            <Row className="mt-5">
                <Col>
               <h2>Bienvenido a tu horario</h2>
               <p>A continuacion tendrás tu horario</p> 
               <div>
                   <Link to={rutas.login}>Ingresa</Link> o <Button as={Link} to ={rutas.register}>Crea una cuenta</Button>
               </div>
               </Col>
               <Col>
                <img
                    src="/img/task-manager.svg"
                    alt="horario"
                />
               </Col>
            </Row>
        </Container>
    )
}