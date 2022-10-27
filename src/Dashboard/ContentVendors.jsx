
import {Container, Row , Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

const ContentVendors = () => {
    return(
        <Container className="content-vendors">
            
            <Row>
                <Col>
                    <div className="header">
                        <h3>
                            <span>Vendors</span>
                            <button className="btn">Add New</button>
                        </h3>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default ContentVendors;