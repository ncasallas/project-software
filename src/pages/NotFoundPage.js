import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import rutas from "../helpers/rutas"

export default function NotFoundPage() {
    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <img
                        style={{ width: '100' }}
                        src="/img/404-not-found.svg"
                        alt="error-404"
                    />
                    <h2>¿Te has perdido?</h2>
                </Col>
                <p>Vuelve al <Link to={rutas.home}>inicio</Link>
                </p>
            </Row>
        </Container>
    )
}