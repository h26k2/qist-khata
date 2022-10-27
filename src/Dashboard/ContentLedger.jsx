
import {Container, Row , Col} from 'react-bootstrap'
import Table from 'react-bootstrap/Table';

const ContentLedger = () => {
    return(
        <Container className="content-ledger" fluid>
            
            <Row>
                <Col>
                    <div className="header">
                        <h3>
                            <span>Ledger</span>
                            <button className="btn">Add New</button>
                        </h3>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default ContentLedger;