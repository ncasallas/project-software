import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import useAuth from "../../auth/useAuth"
import ChangePasswordModal from "./components/ChangePasswordModal";
import DeleteModal from "./components/DeleteModal";

export default function AccountPage() {
    const { user } = useAuth();

    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    const handleModal = () => setIsOpenDeleteModal(!isOpenDeleteModal);

    const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] = useState(false);
    const handleChangePasswordModal = () =>
        setIsOpenChangePasswordModal(!isOpenChangePasswordModal);

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col xs={12} className="text-center">
                        <img
                            src="/img/male_avatar.svg"
                            alt="profile"
                            style={{
                                width: '200px',
                                height: '200px'
                            }}
                        />
                    </Col>
                    <Col className="mt-5">
                        <Card style={{ maxWidth: '360px' }} className="mx-auto p-4">
                            <p className="text-center" ><b>Nombre:</b> {user?.nombre} </p>
                            <p className="text-center" ><b>Email:</b> {user?.email} </p>
                            <p className="text-center" ><b>Rol:</b> {user?.rol} </p>

                            <Button variant="warning">
                                Editar cuenta
                            </Button>
                            <Button variant="warning" className="mt-2" onClick={handleChangePasswordModal}>
                                Cambiar contraseña
                            </Button>
                            <Button variant="danger" className="mt-3" onClick={handleModal}>
                                Eliminar cuenta
                            </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <DeleteModal
                isOpen={isOpenDeleteModal}
                close={handleModal}
            />
            <ChangePasswordModal
                isOpen={isOpenChangePasswordModal}
                close={handleChangePasswordModal}
            />
        </>
    )
}