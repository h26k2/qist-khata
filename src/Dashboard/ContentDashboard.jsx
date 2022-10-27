
import {Container,Row,Col} from 'react-bootstrap'
import Statistics from '../Components/Statistics';

const ContentDashboard = () => {
    return(
        <Container className="content-dashboard" fluid>

            <Row>
                <Col>
                    <div className="header">
                        <h3>
                            <span>Dashboard</span>
                        </h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h5>Statistcs</h5>
                </Col>
            </Row>

            <Statistics />


        </Container>
    )
}

export default ContentDashboard;