import { useEffect, useState } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { getNotifications } from '../api/Api';
import { useAuth } from "../authentication_token/AuthProvider";
import Loader from './Loader';

function Notification() {
    const [token, setToken] = useState();
    const [notification, setNotification] = useState([]);
    const { getToken } = useAuth()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const mytoken = getToken();
        setToken(mytoken)
    }, [getToken]);

    useEffect(() => {
        async function fetchData() {
            if (!token) return;
            setLoading(true); // Start loading
            try {
                const notificationData = await getNotifications('get-notifications', token);
                setNotification(notificationData);
            } catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false); // End loading
            }
        }
        fetchData();
    }, [token])

    return (
        <Container className="min-vh-100">
            <h1 className='my-booking  text-center text-muted fs-2 my-4'>NOTIFICATIONS</h1>
            <Col lg={8} className="mx-auto">
                <Col>
                    {loading ? (
                        <Loader />
                    ) : notification ? (
                        notification.map((item, index) => {
                            return (
                                <Card key={index} className="mx-3 text-muted my-3">
                                    <ul>
                                        <li className="my-3" value={item.id}>{item.notification}</li>
                                    </ul>
                                </Card>
                            );
                        })
                    ) : (
                        <p>No notifications available.</p>
                    )}
                </Col>
            </Col>
        </Container>
    )
}

export default Notification