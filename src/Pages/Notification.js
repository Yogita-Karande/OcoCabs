import { useEffect, useState } from "react";
import { Card, CardBody, CardGroup, Col, Container, Image } from "react-bootstrap";
import { getToken } from "../authentication_token/Token";

function Notification() {
    const [token, setToken] = useState()

    useEffect(() => {
        setToken(getToken());
    }, []);

    const [notifications, getNotifications] = useState()

    useEffect(() => {
        async function fetchData() {
            try {
                const notificatonData = await getNotifications('get-notifications', token);
                getNotifications(notificatonData);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <Container className="min-vh-100">
            <h1 className='my-booking  text-center text-muted fs-2 my-4'>NOTIFICATIONS</h1>
            <Col lg={8} className="mx-auto">
                <CardGroup>
                    <Card>
                        <CardBody>
                            <Col className="d-flex">
                                <Image src='./assets/images/form_bg_image.jpg' roundedCircle width='40px' height='40px' /><p className="ms-3 mt-2 text-muted fs-5">Your Profile updated 5 min ago</p>
                            </Col>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Col>
        </Container>
    )
}

export default Notification