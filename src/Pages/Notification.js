import { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { getNotifications } from '../api/Api';
import { getToken } from "../authentication_token/Token";

function Notification() {
    const [token, setToken] = useState();
    const [notification, setNotification] = useState();

    useEffect(() => {
        setToken(getToken());
    }, []);

    console.log(notification)
    useEffect(() => {
        async function fetchData() {
            try {
                const notificationData = await getNotifications(token);
                setNotification(notificationData)
                console.log(notificationData)
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
                <Col>
                    {notification && (
                        notification.map((item, index) => {
                            console.log(item.notification);
                            return (
                                <Card key={index} className="mx-3 text-muted my-3">
                                    <ul>
                                        <li className="my-3" value={item.id}>{item.notification}</li>
                                    </ul>
                                </Card>
                            );
                        })
                    )}
                </Col>
            </Col>
        </Container>
    )
}

export default Notification