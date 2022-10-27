
import {Container, Row , Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';


const ContentItems= () => {
    return(
        <Container className="content-items" fluid>
            
            <Row>
                <Col>
                    <div className="header">
                        <h3>
                            <span>Items</span>
                            <button className="btn">Add New</button>
                        </h3>
                    </div>
                </Col>
            </Row>

            <Row>

            </Row>

        </Container>
    )
}

export default ContentItems;