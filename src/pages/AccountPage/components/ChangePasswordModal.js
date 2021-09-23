import {Modal, Form, Button, Alert} from 'react-bootstrap'
import {useForm} from 'react-hook-form'

export default function ChangePasswordModal( {isOpen, close}){

    const {register, handleSubmit, formState: {errors}} = useForm();



    const onSubmit = (formData) =>{
       alert("cambiando contraseña")
    }

    

    return (
        <Modal show={false} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nueva Contraseña</Form.Label>
                        <Form.Control 
                        placeholder="Escribra nueva contraseña"
                        {...register("password")}
                        />
                        {errors?.password && (
                        <Form.Text>
                            <Alert variant="danger">
                                Error en el campo contraseña
                            </Alert>
                        </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>Actualizar contraseña</Button>
            </Modal.Footer>
        </Modal>
    )
}